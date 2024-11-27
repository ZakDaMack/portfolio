import { FC } from "react"

interface ItemProps {
    title: string
    excerpt: string
    image: string
    link: string
}

const BlogItem: FC<ItemProps> = ({ title, excerpt, image, link }) => {
    return (
        <div className="shadow-lg rounded-lg dark:bg-gray-700">
            <a href={link} className="inline-block h-full">
                <div className="overflow-hidden rounded-lg text-black dark:text-white">
                    <img className="object-cover w-full h-[200px]" src={image} alt={title} />
                    <h3 className="text-2xl m-4">{title}</h3>
                    <p className="text-justify text-sm m-4">{excerpt}</p>
                </div>
            </a>
        </div>
    );
}

export default BlogItem;