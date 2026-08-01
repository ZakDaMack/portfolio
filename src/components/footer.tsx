import { FC } from "react"

import { Dock, DockIcon } from "./ui/dock";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { faDocker, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { GithubLogoIcon, LinkedinLogoIcon, EnvelopeIcon, ShippingContainerIcon } from "@phosphor-icons/react"

const links = [
  { icon: GithubLogoIcon, href: "https://github.com/ZakDaMack/", label: "GitHub" },
  { icon: LinkedinLogoIcon, href: "https://linkedin.com/in/zak-dowsett-4a7455131/", label: "LinkedIn" },
  { icon: EnvelopeIcon, href: "mailto:z.dowsett@outlook.com", label: "Email" },
  { icon: ShippingContainerIcon, href: "https://hub.docker.com/u/zakdamack/", label: "Docker" }
];

const Footer: FC = () => (
  <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
    <TooltipProvider>
      <Dock direction="middle" className="rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-2xl">
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
                  <item.icon className="text-foreground place-self-center group-hover:scale-150 origin-bottom transition-all duration-300" />
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
