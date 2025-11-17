import { FC } from "react";

import { getAllBlogs } from "@/lib/blogs";
import { getAllItems } from "@/lib/portfolio";

import Blog from "@/interfaces/blog";
import { GetStaticProps } from "next";
import Portfolio from "@/interfaces/portfolio";

import Head from "next/head";
import About from "@/components/home/about";
import RootLayout from "@/components/layout";
import Splash from "@/components/home/splash";
import BlogSection from "@/components/home/blog";
import PortfolioSection from "@/components/home/portfolio";

interface _HomeProps {
  portfolioData: Portfolio[];
  blogData: Blog[];
}

const Home: FC<_HomeProps> = ({ portfolioData, blogData }) => {
  return (
    <RootLayout>
      <Head>
        <title>Zak Dowsett</title>
      </Head>
      <Splash />
      <About />
      <PortfolioSection data={portfolioData} />
      <BlogSection data={blogData} />
    </RootLayout>
  );
}

const getStaticProps: GetStaticProps<_HomeProps> = async ({ params }) => {
  // Get external data from the file system
  const portfolioData = await getAllItems()
  portfolioData.sort((a, b) => {
    return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
  });

  const blogData = await getAllBlogs();
  blogData.forEach(b => {
    b.id = `/blog/${b.id}`;
  });
  blogData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { 
      portfolioData,
      blogData: blogData.slice(0, 3),
    },
  };
};

export default Home;
export { getStaticProps };