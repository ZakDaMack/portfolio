import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDocker, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const links = [
    { icon: faGithubAlt, href: "https://github.com/ZakDaMack/" },
    { icon: faLinkedinIn, href: "https://linkedin.com/in/zak-dowsett-4a7455131/" },
    { icon: faEnvelope, href: "mailto:z.dowsett@outlook.com" },
    { icon: faDocker, href: "https://hub.docker.com/u/zakdamack/" }
];

const QuickLinks: React.FC = () => {
    return (
        <div className="bg-slate-800 md:bg-white p-2 md:fixed right-0 top-[50%] md:-translate-y-1/2 md:rounded-l drop-shadow-lg">
            <h3 className="md:hidden text-white pl-1 text-xl">Social</h3>
            <div className="flex md:flex-col space-1">
                {links.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        className="text-center text-2xl p-2 text-white hover:text-white md:text-black md:hover:text-black rounded hover:md:bg-gradient-to-b from-fuchsia-200 to-yellow-300"
                    >
                        <FontAwesomeIcon icon={link.icon} />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default QuickLinks;
