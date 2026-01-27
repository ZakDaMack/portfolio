import React, { FC, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

import Blog from "@/interfaces/blog";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";

const FeaturedCarousel: FC<{ blogs: Blog[] }> = ({ blogs }) => {
    const [api, setApi] = useState<CarouselApi>()
    const [count, setCount] = useState<number>(0)
    const [current, setCurrent] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    
    React.useEffect(() => {
        if (!api) return;
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })

        // keep play/pause button synced with plugin state
        const onPlay = () => setIsPlaying(true);
        const onStop = () => setIsPlaying(false);

        setIsPlaying(api.plugins().autoplay?.isPlaying() ?? false);
        api.on("autoplay:play", onPlay);
        api.on("autoplay:stop", onStop);
    }, [api])

    const togglePlay = () => {
        const autoplay = api?.plugins().autoplay;
        if (!autoplay) return;
        autoplay?.isPlaying() ? autoplay.stop() : autoplay.play(false);
    }

    const changeCarousel = (val: number) => {
        api!.scrollTo(val)
    }

    return (
        <Carousel setApi={setApi} className='relative group' plugins={[
            Autoplay({ delay: 5000 })
        ]}>
            <CarouselContent className="m-0">
                {blogs.map((blog) => (
                    <CarouselItem key={blog.id} className="p-4!">
                        <BlogItem blog={blog} count={count} current={current} onSelect={changeCarousel} />
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* carousel navigation */}
            <div className='absolute w-full px-8 top-1/2 -translate-y-1/2 flex justify-between group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
                <Button
                    size='icon-lg'
                    variant='ghost'
                    className='cursor-pointer'
                    onClick={() => api!.scrollPrev()}
                >
                    <FontAwesomeIcon icon={faChevronLeft} fontSize={18} />
                </Button>
                <Button
                    size='icon-lg'
                    variant='ghost'
                    className='cursor-pointer'
                    onClick={() => api!.scrollNext()}
                >
                    <FontAwesomeIcon icon={faChevronRight} fontSize={18} />
                </Button>
            </div>

            <Button 
                size='icon-lg'
                variant='ghost'
                className='cursor-pointer absolute bottom-8 right-8 group-hover:opacity-100 opacity-0 transition-opacity duration-300'
                onClick={togglePlay}
            >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} fontSize={18} />
            </Button>

        </Carousel>
    );
}

const BlogItem: React.FC<{
    blog: Blog,
    count: number,
    current: number,
    onSelect: (val: number) => void,
}> = ({
    blog,
    count,
    current,
    onSelect
}) => {
    return (
        <div className='rounded-3xl w-full max-h-[65vh] aspect-video overflow-hidden relative group border'>
            {/* bg image */}
            <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 5 }}
                className='w-full h-full origin-left'
            >
                <Image
                    src={blog.hero_img}
                    width={1200} height={1400}
                    className='w-full h-full object-cover'
                    alt={blog.hero_attr}
                />
            </motion.div>

            {/* content */}
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-radial from-transparent to-black/80 flex justify-between items-center p-24'>
                {/* article info - slide in ltr */}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='mt-6 mb-12'
                >
                    <Link href={blog.id}>
                        <div className='space-y-1 mr-4'>
                            <h2 className='text-3xl md:text-5xl text-nord-6 max-w-4xl font-bold hover:text-nord-9'>{blog.title}</h2>
                            {/* tags */}
                            <div className='my-6'>
                                {blog.tags.map((tag) => (
                                    <span 
                                        key={tag}
                                        className='rounded-3xl p-3 bg-black/10 text-nord-4 border border-nord-0 backdrop-blur-sm'
                                        // href={`/tags/${tag!.toLowerCase()}`}
                                    >{tag}</span>
                                ))}
                            </div>
                            <p className='text-lg text-nord-4 max-w-6xl'>{blog.subtitle}</p>
                            <p className='text-sm text-nord-6'>{blog.formatted_date}</p>
                        </div>
                    </Link>
                </motion.div>
                    
                {/* selected icons */}
                <div className='flex gap-2 mb-6 h-3/5 items-end'>
                    {new Array(count).fill({}).map((_,i) => (
                        <div 
                            key={i} 
                            className={cn(
                                i === current ?  'w-6' : 'w-2',
                                'h-2 rounded-full bg-nord-4/80 cursor-pointer'
                            )} 
                            onClick={() => onSelect(i)}
                        >
                            {i == current && (<motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ duration: 5, ease: 'linear' }}
                                className='h-full rounded-full bg-nord-6'
                            />)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedCarousel;