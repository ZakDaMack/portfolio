import { FC } from "react"

import { Dock, DockIcon } from "./ui/dock";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { faDocker, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const links = [
  { icon: faGithubAlt, href: "https://github.com/ZakDaMack/", label: "GitHub" },
  { icon: faLinkedinIn, href: "https://linkedin.com/in/zak-dowsett-4a7455131/", label: "LinkedIn" },
  { icon: faEnvelope, href: "mailto:z.dowsett@outlook.com", label: "Email" },
  { icon: faDocker, href: "https://hub.docker.com/u/zakdamack/", label: "Docker" }
];

const Footer: FC = () => (
  <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
    <TooltipProvider>
      <Dock direction="middle">
        {links.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  className="text-xl rounded-full w-10 h-10 hover:bg-neutral-800/20 grid group"
                >
                  <FontAwesomeIcon className="text-foreground place-self-center group-hover:scale-150 origin-bottom transition-all duration-300" icon={item.icon} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  </footer>
);

export default Footer;
