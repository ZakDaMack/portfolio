import React from "react"
import { cn } from "@/lib/utils";

import { Link } from "gatsby";
import ThemeToggler from "./theme_toggler";
import { StaticImage } from "gatsby-plugin-image"

const Header: React.FC<{
  className?: string;
  forceBlur?: boolean;
  blurHeight?: number;
}> = ({ 
  className,
  forceBlur = false,
  blurHeight,
 }) => {
  const [blurred, setBlurred] = React.useState<boolean>(false)
  const onScroll = () => {
    const scrollPos = window.scrollY
    setBlurred((blurHeight ?? window.innerHeight) < scrollPos)
  }
  
  // add listener
  React.useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn(
      "z-20 p-4 fixed t-0 w-full",
      className
    )}>
      <div className={cn(
        "flex p-2 align-center isolate rounded-full transition-all duration-700 relative",
        forceBlur || blurred ? "bg-white/10 dark:bg-black/10  border backdrop-blur-md" : undefined
      )}>
        <Link className="text-foreground" to="/">
          <StaticImage 
            src='../images/z.png'
            alt="Zak Dowsett" 
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </Link>
        <div className="grow" />
        <ThemeToggler />

        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className={cn(
            "flex gap-6 list-none text-lg hover:[&_a]:underline",
            forceBlur || blurred ? "[&_a]:hover:text-foreground [&_a]:text-foreground" : "[&_a]:hover:text-nord-6 [&_a]:text-nord-6",
          )}>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <a className="cursor-pointer" onClick={toPortfolio}>Portfolio</a>
            </li> */}
            {/* <li>
              <a href="/resume.pdf" target="_blank">Resume</a>
            </li> */}
            <li>
              <Link className="text-foreground" to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
