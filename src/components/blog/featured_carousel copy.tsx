import React from "react";
import { Link } from "gatsby";
import BlogMDX from "@/models/blog_mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faSolidCircle } from "@fortawesome/free-solid-svg-icons";

const FeaturedCarousel: React.FC<{ blogs: BlogMDX[] }> = ({ blogs }) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    
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
                    <CarouselItem key={blog.id}>
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
    onSelect: (val: number)=>void
}> = ({
    blog,
    count,
    current,
    onSelect
}) => {
    const heroImg = getImage(blog.frontmatter?.hero_img)!
    return (
        <div key={blog.id} className='rounded-3xl max-h-[60vh] overflow-hidden relative'>
            <GatsbyImage
                image={heroImg}
                objectFit='cover'
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
                <div className='md:flex justify-between items-end mt-6 mb-16'>
                    <div className='space-y-3'>
                        <h2 className='text-3xl md:text-5xl text-nord-6 max-w-4xl font-bold'>{blog?.frontmatter?.title}</h2>
                        <p className='text-lg text-neutral-400'>{blog?.frontmatter?.subtitle}</p>
                    </div>
                    <div>
                        <p className='text-nord-6'>{blog?.frontmatter?.date}</p>
                    </div>
                </div>
                    
                <div className='flex gap-3 mb-8'>
                    {new Array(count).fill({}).map((_,i) => (
                        <FontAwesomeIcon key={i} className="cursor-pointer" icon={current === i ? faSolidCircle : faCircle} onClick={() => onSelect(i)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedCarousel;