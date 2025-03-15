import React from "react"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import ReactMarkdown from "react-markdown"

interface ItemProps {
    name: string
    logo: ImageDataLike
    background: ImageDataLike
    link: string
    skills: string[]
    content: string
}

const PortfolioItem: React.FC<ItemProps> = ({ 
    name, 
    logo, 
    background, 
    link,
    skills,
    content
}) => {
    const logoImage = getImage(logo);
    const backdropImage = getImage(background);
    return (
        <div className="grid grid-cols-12 grid-flow-roq gap-4">
            <a href={link} target="_blank" className="col-span-12 md:col-span-4 relative overflow-hidden rounded-lg h-[250px] shadow-xl">
                <GatsbyImage 
                    className="object-cover w-full h-full" 
                    image={backdropImage!} 
                    alt={`${name} backdrop`}
                />
                <div className="absolute top-0 grid w-full h-full bg-black/50">
                    <GatsbyImage 
                        objectFit='contain'
                        className="max-h-[80px] max-w-[80%] place-self-center" 
                        image={logoImage!} 
                        alt={`${name} logo`} 
                    />
                </div>
            </a>
            <div className="text-justify col-span-12 md:col-span-8 space-y-4 text-xl">
                <a href={link} className="space-x-2 cursor-pointer hover:underline text-foreground hover:text-foreground">
                    <h3 className="text-3xl inline">{name}</h3>
                    <FontAwesomeIcon className="mb-4 text-sm" icon={faArrowUpRightFromSquare} />
                </a>
                {/* <div className="text-xl"> */}
                    <ReactMarkdown>
                        {content}
                    </ReactMarkdown>
                {/* </div> */}
                <div className="flex flex-wrap">
                    {skills?.map(skill => (
                        <div
                            key={skill}
                            className="d-inline-block mr-2 mb-2 p-2 bg-nord-4 text-nord-1 text-sm rounded"
                        >{skill}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;