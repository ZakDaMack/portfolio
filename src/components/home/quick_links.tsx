import React from "react"

import { cn } from "@/lib/utils";
import { useDarkMode } from "@/hooks/use_dark_mode";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faDocker, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const links = [
    { icon: faGithubAlt, href: "https://github.com/ZakDaMack/" },
    { icon: faLinkedinIn, href: "https://linkedin.com/in/zak-dowsett-4a7455131/" },
    { icon: faEnvelope, href: "mailto:z.dowsett@outlook.com" },
    { icon: faDocker, href: "https://hub.docker.com/u/zakdamack/" }
];

const QuickLinks: React.FC = () => {
    const { theme, toggleMode } = useDarkMode()
    return (
        <div className="bg-nord-2 md:bg-card p-2 md:fixed right-0 top-[50%] md:-translate-y-1/2 md:rounded-l drop-shadow-lg">
            <h3 className="md:hidden text-nord-6 pl-1 text-xl">Social</h3>
            <div className="flex md:flex-col space-1">
                {links.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        className="text-center text-2xl p-2 text-nord-6 hover:text-nord-6 md:text-foreground md:hover:text-foreground rounded hover:md:bg-gradient-to-b from-fuchsia-200 to-yellow-300"
                    >
                        <FontAwesomeIcon icon={link.icon} />
                    </a>
                ))}
                <div className="md:border-t border-foreground">
                    <div onClick={toggleMode} className={cn(
                        // theme === 'light'
                        "group dark:text-white",
                        "cursor-pointer text-center text-2xl p-2 text-nord-6 hover:text-nord-6 md:text-foreground md:hover:text-foreground rounded hover:md:bg-gradient-to-b from-fuchsia-200 to-yellow-300"
                    )}>
                        {theme === 'light' ? (
                            <FontAwesomeIcon icon={faSun} className="group-hover:animate-spin duration-700" />
                        ) : (
                            <FontAwesomeIcon icon={faMoon} className="group-hover:animate-bounce duration-700" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickLinks;
