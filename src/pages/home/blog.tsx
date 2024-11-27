import { FC, useEffect, useState } from "react"
import BlogItem from "@/components/blog_item"

const Blog: FC = () => {
    const [posts, setPosts] = useState<any[]>([])
    useEffect(() => {
        fetch('https://blog.zakdowsett.co.uk/ghost/api/content/posts/?key=44a65805ff949082d0ff581ab1&include=tags&limit=3')
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    }, [])

    return (
        <section id="blog" className="py-16 px-3 md:px-24  min-h-[90vh]">
            <div className="container max-w-[80em] mx-auto">

                <div className="text-center pb-12">
                    <h2 className="text-6xl pb-4 font-light">Blog</h2>
                    <p className="text-center text-xl">
                        Recently, I've started homelabbing to improve my DevOps and infrastructure skillset.
                        Going forward, I am to write about what I've learnt for future reference and hopefully to help others as well.
                        View my latest posts below, or go to
                    </p>
                    <a href="https://zakdowsett.co.uk/blogs" className="text-xl pt-4">
                        https://zakdowsett.co.uk/blogs
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {posts.map(item => (
                        <BlogItem 
                            key={item.id}
                            title={item.title}
                            excerpt={item.excerpt}
                            link={item.url}
                            image={item.feature_image}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}   

export default Blog;