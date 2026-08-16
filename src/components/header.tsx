"use client";

import { useState, useLayoutEffect, useEffect, FC } from "react"
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Image from "next/image";
import ThemeToggler from "./theme_toggler";
import Icon from "./icon";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/history", label: "History" },
];

const externalLinks = [
  { href: "https://github.com/ZakDaMack/", label: "GitHub" },
  { href: "https://linkedin.com/in/zak-dowsett-4a7455131/", label: "LinkedIn" },
  { href: "https://hub.docker.com/u/zakdamack/", label: "Docker" }
];

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
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  // lock page scroll while the menu overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

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
    <>
    <header className={cn(
      "z-20 fixed t-0 w-full border-b transition-all duration-300",
      blurred
        ? "bg-white/10 dark:bg-black/10 border-border backdrop-blur-md"
        : "p-4 bg-transparent border-transparent backdrop-blur-[0px]",
      `header-${blurred ? 'blurred' : 'unblurred'}`,
      className
    )}>
      <div className={cn(
        "flex items-center gap-4 p-2 mx-auto transition-all duration-300",
        blurred ? "container" : "max-w-full",
      )}>
          <Link className="text-foreground" href="/">
            <Icon />
          </Link>

          <div className="grow" />

          <nav className="hidden sm:block">
            <ul className={cn(
              "flex items-center gap-6 list-none [&_a]:font-light [&_a]:hover:text-foreground [&_a]:text-foreground",
              // blurred ? "[&_a]:hover:text-foreground [&_a]:text-foreground" : "[&_a]:hover:text-nord-6 [&_a]:text-nord-6",
            )}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Button asChild className="rounded-4xl bg-nord-10">
                  <a href="/zaks_cv.pdf" target='_blank' className='text-foreground hover:no-underline!'>My CV</a>
                </Button>
              </li>
            </ul>
          </nav>

          <ThemeToggler />

          {/* menu nav button */}
          <Button
            size='icon'
            onClick={() => setMenuOpen(o => !o)}
            aria-label='Menu'
            aria-expanded={menuOpen}
            data-open={menuOpen}
            className="group sm:hidden rounded-full border border-white/20 bg-white/20 backdrop-blur-xl shadow-lg"
          >
            <ListIcon size={16} className="text-foreground group-data-[open=true]:hidden" />
            <XIcon size={16} className="text-foreground hidden group-data-[open=true]:block" />
          </Button>

        </div>
    </header>

    {/* menu overlay */}
    <div
      data-open={menuOpen}
      aria-hidden={!menuOpen}
      className={cn(
        "group fixed inset-0 z-10 sm:hidden bg-white/60 dark:bg-black/60 backdrop-blur-xl",
        "transition-[opacity,visibility] duration-300",
        "data-[open=false]:opacity-0 data-[open=false]:invisible",
      )}
    >
      <nav className="h-full px-8 py-32">
        <ul className={cn(
          "space-y-8 list-none",
          "[&_li]:transition-all [&_li]:duration-300 [&_li]:opacity-0 [&_li]:translate-y-2",
          "group-data-[open=true]:[&_li]:opacity-100 group-data-[open=true]:[&_li]:translate-y-0",
        )}>
          {navLinks.map((l, i) => (
            <li key={l.href} className="border-b border-slate-500 dark:border-nord-4 pb-4" style={{ transitionDelay: `${50 * i}ms` }}>
              <Link
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light text-foreground"
              >{l.label}</Link>
            </li>
          ))}
          <li className="text-center" style={{ transitionDelay: `${50 * navLinks.length}ms` }}>
            <Button asChild size='lg' className="rounded-4xl w-full bg-nord-10 py-8 px-12">
              <a href="/zaks_cv.pdf" target='_blank' className='text-xl text-foreground hover:no-underline!'>View my CV</a>
            </Button>
          </li>
          <li>
            <div className="flex">
              {externalLinks.map((link, i) => (
                <>
                  <a href={link.href} className="text-nord-10 dark:text-nord-8">{link.label}</a>
                  {i != externalLinks.length - 1 && (<span className='px-2 text-sm text-nord-10 dark:text-nord-8'>&#x2022;</span>)}
                </>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Header;
