import { FC } from "react"

import Blog from "@/interfaces/blog";

import BlogPostEntry from "../blog/entry";

const BlogSection: FC<{
  data: Blog[]
}> = ({ data }) => {
    return (
        <section id="portfolio" className="py-16 px-4 md:px-24">
            <div className="container max-w-[80em] mx-auto mb-8">
                <div className="pb-12">
                    <h2 className="text-5xl font-light">Blog</h2>
                    <p className='mt-1 mb-4 text-xl text-nord-3 dark:text-nord-4'>Let&apos;s look at where I&apos;ve worked and what I&apos;ve done</p>
                </div>

                <div className='grid lg:grid-cols-3 gap-8'>
                  {data.map((p) => (
                    <BlogPostEntry key={p.id} blog={p} />
                  ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;