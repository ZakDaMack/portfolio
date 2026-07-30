"use client";

import { useState, useLayoutEffect, FC } from "react"
import { cn } from "@/lib/utils";

import Link from "next/link";
import Image from "next/image";
import ThemeToggler from "./theme_toggler";

const Header: FC<{
  className?: string;
  forceBlur?: boolean;
  blurHeight?: number;
}> = ({ 
  className,
  forceBlur = false,
  blurHeight = 100,
 }) => {
  const [blurred, setBlurred] = useState<boolean>(false)
  
  // add listener
  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY
      // setBlurred((blurHeight ?? window.innerHeight) < scrollPos)
      setBlurred(blurHeight < scrollPos)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [setBlurred, blurHeight])

  return (
    <header className={cn(
      "z-20 p-4 fixed t-0 w-full",
      className
    )}>
      <div className={cn(
        "flex p-2 align-center isolate rounded-full transition-all duration-700 relative",
        forceBlur || blurred ? "bg-white/10 dark:bg-black/10  border backdrop-blur-md" : undefined
      )}>
        <Link className="text-foreground shadow-2xl" href="/">
          <Image 
            src='/z.png'
            alt="Zak Dowsett" 
            width={100} height={100}
            className="w-12 h-12 rounded-full shadow-2xl"
          />
        </Link>
        <div className="grow" />
        <ThemeToggler />

        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className={cn(
            "flex gap-6 list-none text-lg [&_a]:hover:underline",
            forceBlur || blurred ? "[&_a]:hover:text-foreground [&_a]:text-foreground" : "[&_a]:hover:text-nord-6 [&_a]:text-nord-6",
          )}>
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li>
              <a className="cursor-pointer" onClick={toPortfolio}>Portfolio</a>
            </li> */}
            {/* <li>
              <a href="/resume.pdf" target="_blank">Resume</a>
            </li> */}
            <li>
              <Link className="text-foreground" href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
