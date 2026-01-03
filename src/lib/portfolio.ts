import fs from 'fs';
import path from 'path';

import Portfolio from '@/interfaces/portfolio';

import html from 'remark-html';
import { remark } from 'remark';
import matter from 'gray-matter';

const _portfolioDirectory = path.join(process.execPath, 'content/portfolio');
const _imagesDirectory = path.join(process.execPath, 'public/images');

export async function getMarkdownData(slug: string): Promise<string> {
  const fullPath = path.join(_portfolioDirectory, `${slug}/index.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  return contentHtml;
} 

export async function getEntryData(slug: string): Promise<Portfolio> {
  const fullPath = path.join(_portfolioDirectory, `${slug}/index.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // copy file for logo
  const srcLogoPath = path.join(_portfolioDirectory, slug, matterResult.data.logo);
  const newLogoName = `${path.basename(slug)}-${path.basename(matterResult.data.logo)}`;
  const destLogoPath = path.join(_imagesDirectory, newLogoName);
  fs.copyFileSync(srcLogoPath, destLogoPath);

  // copy file for backdrop
  const srcBackdropPath = path.join(_portfolioDirectory, slug, matterResult.data.backdrop);
  const newBackdropName = `${path.basename(slug)}-${path.basename(matterResult.data.backdrop)}`;
  const destBackdropPath = path.join(_imagesDirectory, newBackdropName);
  fs.copyFileSync(srcBackdropPath, destBackdropPath);
 
  // Combine the data with the id and contentHtml
  return {
    id: slug,
    type: matterResult.data.type,
    role: matterResult.data.role,
    summary: matterResult.data.summary,
    link: matterResult.data.link,
    logo: path.join('/images', newLogoName),
    backdrop: path.join('/images', newBackdropName),
    start_date: matterResult.data.start_date,
    leave_date: matterResult.data.leave_date,
    skills: matterResult.data.skills,
    tasks: matterResult.data.tasks,
    name: matterResult.data.name,
  };
}

export function getPaths(): string[] {
  const res = fs.readdirSync(_portfolioDirectory, { withFileTypes: true, recursive: false }) 
  return res.filter(d => d.isDirectory()).map(d => d.name);
}

export async function getAllItems(): Promise<Portfolio[]> {
  const slugs = getPaths();
  const entries = [];
  for (const slug of slugs) {
    entries.push(await getEntryData(slug));
  }
  return entries;
}