import React from "react"

import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import { Link } from "gatsby"

interface ItemProps {
    title: string
    excerpt: string
    image: ImageDataLike
    imageAlt: string
    link: string
    date: string
}

const BlogItem: React.FC<ItemProps> = ({ title, excerpt, image, imageAlt, link, date }) => {
    const hero = getImage(image);
    return (
        <div className="shadow-xl rounded-lg dark:bg-gray-700">
            <Link to={link} className="inline-block h-full">
                <div className="flex flex-col overflow-hidden rounded-lg text-black dark:text-white h-full">
                    <GatsbyImage
                        className="object-cover w-full h-[200px]" 
                        image={hero!}
                        alt={imageAlt}
                    />
                    <div className="flex flex-col grow p-4 gap-4">
                        <h3 className="text-2xl">{title}</h3>
                        <p className="text-justify text-sm">{excerpt}</p>
                        <div className="grow" />
                        <p className="text-justify text-neutral-400">{date}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default BlogItem;