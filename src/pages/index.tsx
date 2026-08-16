import { FC } from "react";

import { getLatestCaseStudies } from "@/lib/blogs";

import Blog from "@/interfaces/blog";
import { GetStaticProps } from "next";

import Head from "next/head";
import About from "@/components/home/about";
import RootLayout from "@/components/layout";
import Splash from "@/components/home/splash";
import WorkGrid from "@/components/home/work_grid";
import StatsBanner from "@/components/home/stats_banner";

interface _HomeProps {
  caseStudies: Blog[];
}

const Home: FC<_HomeProps> = ({ caseStudies }) => {
  return (
    <RootLayout headerClassName="[&.header-unblurred_a]:text-nord-6!">
      <Head>
        <title>Zak Dowsett</title>
      </Head>
      <Splash />
      <WorkGrid caseStudies={caseStudies} />
      <StatsBanner />
      <About />
    </RootLayout>
  );
}

const getStaticProps: GetStaticProps<_HomeProps> = async () => {
  const caseStudies = await getLatestCaseStudies();
  caseStudies.forEach(b => {
    b.id = `/blog/${b.id}`;
  });
  caseStudies.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { 
      caseStudies,
    },
  };
};

export default Home;
export { getStaticProps };