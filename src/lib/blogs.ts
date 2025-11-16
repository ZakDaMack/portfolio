import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';

import html from 'remark-html';
import { remark } from 'remark';
import matter from 'gray-matter';

import Blog from '@/interfaces/blog';

const _articlesDirectory = path.join(process.cwd(), 'content/blogs');
const _imagesDirectory = path.join(process.cwd(), 'public/images');

export async function getMarkdownData(slug: string): Promise<string> {
    const fullPath = path.join(_articlesDirectory, `${slug}/index.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
 
    // getimage md using regex, copy and replace paths
    const imgRegex = /!\[.*?\]\((.*?)\)/g;
    let match;
    while ((match = imgRegex.exec(matterResult.content)) !== null) {
        const imgPath = match[1];
        const srcImgPath = path.join(_articlesDirectory, slug, imgPath);
        const newImgName = `${path.basename(slug)}-${path.basename(imgPath)}`;
        const destImgPath = path.join(_imagesDirectory, newImgName);
        fs.copyFileSync(srcImgPath, destImgPath);

        console.log(`Copied image from ${srcImgPath} to ${destImgPath}`);

        // replace all occurrences in content
        const newImgPath = path.join('/images', newImgName);
        matterResult.content = matterResult.content.split(imgPath).join(newImgPath);
    }

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  return contentHtml;
}

export async function getBlogData(slug: string): Promise<Blog> {
  const fullPath = path.join(_articlesDirectory, `${slug}/index.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // copy file for hero
  const srcHeroPath = path.join(_articlesDirectory, slug, matterResult.data.hero_img);
  const newHeroName = `${path.basename(slug)}-${path.basename(matterResult.data.hero_img)}`;
  const destHeroPath = path.join(_imagesDirectory, newHeroName);
  fs.copyFileSync(srcHeroPath, destHeroPath);
 
  // Combine the data with the id and contentHtml
  return {
    id: slug,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    hero_img: path.join('/images', newHeroName),
    hero_attr: matterResult.data.hero_attr,
    published: matterResult.data.published,
    tags: matterResult.data.tags,
    date: matterResult.data.date,
    formatted_date: dayjs(matterResult.data.date).format('D MMMM, YYYY'),
  };
}

export function getPaths(): string[] {
  const res = fs.readdirSync(_articlesDirectory, { withFileTypes: true, recursive: false }) 
  return res.filter(d => d.isDirectory()).map(d => d.name);
}

export async function getAllBlogs(): Promise<Blog[]> {
  const slugs = getPaths();
  const entries = [];
  for (const slug of slugs) {
    entries.push(await getBlogData(slug));
  }
  return entries.filter(b => b.published);
}

export async function getTags(): Promise<string[]> {
  const blogs = await getAllBlogs();
  const tags = Array.from(new Set(blogs.flatMap(b => b.tags)));
  return tags;
}