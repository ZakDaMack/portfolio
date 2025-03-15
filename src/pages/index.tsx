import React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Splash from "../components/home/splash"
import About from "../components/home/about"
import Portfolio from "../components/home/portfolio"
import Blog from "../components/home/blog"
import QuickLinks from "../components/home/quick_links"
import ThemeToggler from "@/components/home/theme_toggler"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="w-screen max-w-full">
      <ThemeToggler />
      <Splash />
      <About />
      <Portfolio />
      <Blog />
      <QuickLinks /> 
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Zak Dowsett</title>
