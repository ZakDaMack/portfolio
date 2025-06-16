import React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Header from "@/components/header"
import Splash from "../components/home/splash_two"
import About from "../components/home/about"
import Portfolio from "../components/home/portfolio"
import Blog from "../components/home/blog"
import Footer from "@/components/footer"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="w-screen max-w-full">
      <Header />
      <Splash />
      <About />
      <Portfolio />
      <Blog />
      <Footer /> 
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Zak Dowsett</title>