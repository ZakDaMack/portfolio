import React from "react";
import BlogMDX from "@/models/blog_mdx";

import { Link } from "gatsby";
import { motion } from "motion/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faSolidCircle } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";

const FeaturedCarousel: React.FC<{ blogs: BlogMDX[] }> = ({ blogs }) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [count, setCount] = React.useState<number>(0)
    const [current, setCurrent] = React.useState<number>(0)
    
    React.useEffect(() => {
        if (!api) return;
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const changeCarousel = (val: number) => {
        api!.scrollTo(val)
    }

    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                {blogs.map((blog, i) => (
                    <CarouselItem key={blog.id} className="!p-4">
                        <BlogItem blog={blog} count={count} current={current} onSelect={changeCarousel} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

const BlogItem: React.FC<{
    blog: BlogMDX,
    count: number,
    current: number,
    onSelect: (val: number) => void,
}> = ({
    blog,
    count,
    current,
    onSelect
}) => {
    const heroImg = getImage(blog.frontmatter?.hero_img)!
    return (
        <div className='rounded-3xl w-full max-h-[65vh] aspect-video overflow-hidden relative group'>
            <GatsbyImage
                image={heroImg}
                objectFit='cover'
                className='group-hover:scale-105 transition-transform duration-700 w-full h-full'
                alt={blog.frontmatter?.hero_attr}
            />
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6'>
                {/* tags */}
                <div>
                    {blog?.frontmatter?.tags?.map((tag) => (
                        <Link 
                            key={tag}
                            className='rounded-3xl p-3 bg-black/10 text-nord-4 border border-nord-0 backdrop-blur-sm'
                            to={`/tags/${tag!.toLowerCase()}`}
                        >
                            {tag}
                        </Link>
                    ))}
                </div>

                {/* article info */}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='md:flex justify-between items-end mt-6 mb-12'
                >
                    <Link to={blog.fields.slug}>
                        <div className='space-y-3 mr-4'>
                            <h2 className='text-3xl md:text-5xl text-nord-6 max-w-4xl font-bold hover:text-nord-9'>{blog?.frontmatter?.title}</h2>
                            <p className='text-lg text-neutral-400 max-w-6xl'>{blog?.frontmatter?.subtitle}</p>
                        </div>
                    </Link>
                    <div>
                        <p className='text-nord-6'>{blog?.frontmatter?.date}</p>
                    </div>
                </motion.div>
                    
                <div className='flex gap-2 mb-6'>
                    {new Array(count).fill({}).map((_,i) => (
                        <FontAwesomeIcon 
                            key={i} 
                            className="cursor-pointer text-nord-6" 
                            icon={current === i ? faSolidCircle : faCircle} 
                            onClick={() => onSelect(i)} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedCarousel;