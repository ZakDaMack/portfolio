import { FC } from 'react';

import { GetStaticProps } from 'next';
import Blog, { BlogType } from '@/interfaces/blog';

import { getBlogData, getMarkdownData, getPaths } from '@/lib/blogs';

import ArticlePost from '@/components/blog/article';
import CaseStudyPost from '@/components/blog/case_study';

interface _BlogPostPageProps {
  data: Blog;
  body: string;
}

const BlogPostPage: FC<_BlogPostPageProps> = ({ data, body }) => {
    switch (data.type) {
        case BlogType.CaseStudy: 
            return <CaseStudyPost data={data} />;
        case BlogType.Article:
            return <ArticlePost data={data} body={body} />;
    }
}

const getStaticProps: GetStaticProps<_BlogPostPageProps> = async ({ params }) => {
    const slug = params?.slug as string;
    const data = await getBlogData(slug);
    const body = await getMarkdownData(slug);

    return {
        props: {
            data,
            body
        }
    };
};

const getStaticPaths = async () => {
    const items = getPaths();
    const paths = items.map((item) => ({
        params: { slug: item },
    }));

    return {
        paths,
        fallback: false,
    };
};

export default BlogPostPage;
export { getStaticProps, getStaticPaths };
