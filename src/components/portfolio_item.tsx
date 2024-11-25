import { FC, ReactNode } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

interface ItemProps {
    name: string
    logo: string
    background: string
    link: string
    skills: string[]
    children: ReactNode[]
}

const PortfolioItem: FC<ItemProps> = ({ name, logo, background, link, skills, children }) => {
    return (
        <div className="grid grid-cols-12 grid-flow-roq gap-4">
            <a href={link} className="col-span-12 md:col-span-4 relative overflow-hidden rounded-lg h-[250px] shadow-xl">
                <img className="object-cover w-full h-full" src={background} alt={`${name} background`} />
                <div className="absolute top-0 grid w-full h-full bg-black/50">
                    <img className="max-h-[80px] max-w-[80%] place-self-center" src={logo} alt={`${name} logo`} />
                </div>
            </a>
            <div className="text-justify col-span-12 md:col-span-8 space-y-4">
                <a href={link} className="pb-2 space-x-2 hover:underline text-black dark:text-white">
                    <h3 className="text-3xl inline">{name}</h3>
                    <FontAwesomeIcon className="mb-4" icon={faArrowUpRightFromSquare} />
                </a>
                {children}
                <div className="flex flex-wrap">
                    {skills.map(skill => (
                        <div
                            key={skill}
                            className="d-inline-block mr-2 mb-2 p-2 bg-neutral-200 text-black rounded"
                        >{skill}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;