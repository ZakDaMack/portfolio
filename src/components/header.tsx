"use client";

import { useState, useLayoutEffect, FC } from "react"
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Image from "next/image";
import ThemeToggler from "./theme_toggler";
import Icon from "./icon";

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
      "z-20 fixed t-0 w-full",
      blurred ? "bg-white/10 dark:bg-black/10 border-b backdrop-blur-md" : "p-4",
      className
    )}>
      <div className={cn(
        "flex items-center gap-4 p-2 transition-all duration-300",
        blurred ? "container mx-auto" : undefined,
      )}>
          <Link className="text-foreground" href="/">
            <Icon />
          </Link>

          <div className="grow" />

          <nav>
            <ul className={cn(
              "flex items-center gap-6 list-none [&_a]:font-light",
              blurred ? "[&_a]:hover:text-foreground [&_a]:text-foreground" : "[&_a]:hover:text-nord-6 [&_a]:text-nord-6",
            )}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link className="text-foreground" href="/blog">Blog</Link>
              </li>
              <li>
                <Button asChild className="rounded-4xl bg-nord-9">
                  <a href="/resume.pdf" target='_blank' className='text-foreground hover:no-underline!'>My CV</a>
                </Button>
              </li>
            </ul>
          </nav>

          <ThemeToggler />

        </div>
    </header>
  );
}

export default Header;
