import React from 'react';
import { motion } from 'motion/react';
import BlogMDX from '@/models/blog_mdx';
import { graphql, HeadFC, PageProps } from "gatsby";

import Header from '@/components/header';
import Footer from '@/components/footer';
import BlogPostEntry from '@/components/blog/entry';
import FeaturedCarousel from '@/components/blog/featured_carousel';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BlogPage: React.FC<PageProps<Queries.AllBlogsQuery>> = ({ data }) => {
    const blogs = data.allMdx.nodes as BlogMDX[];
    const tags = ['All', ...new Set(blogs.flatMap(b => b.frontmatter.tags))];

    const [filter, setFilter] = React.useState('All');
    const filteredBlogs = React.useMemo(() => {
      if (filter === 'All') return blogs;

      return blogs.filter((b) => b.frontmatter.tags.includes(filter))
    }, [blogs, filter])

    return (
      <>
        <Header blurHeight={10} />
        <main className='w-screen min-h-screen'>
          {/* <motion.section 
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className='max-w-screen hidden sm:block'
          > */}
          <section className='max-w-screen hidden sm:block'>
            <FeaturedCarousel blogs={blogs.slice(0,3)} />
          </section>
          {/* </motion.section> */}

          <section className='px-12 pt-14 pb-28'>
            <div className='block sm:hidden mt-12' />
            <h1 className='text-5xl font-light'>Blog</h1>
            <p className='mt-2 mb-6 text-xl text-nord-3 dark:text-nord-4'>Browse the latest, occasionally made blog posts down below!</p>
            <Tabs className='mb-8' value={filter} onValueChange={setFilter}>
              <TabsList className='bg-transparent h-[unset] flex p-0 gap-x-4 justify-start flex-wrap'>
                {tags.map(tag => (
                  <TabsTrigger 
                    key={tag} value={tag}
                    className='text-base py-2 px-4 data-[state=active]:dark:bg-nord-1 data-[state=active]:bg-nord-4 text-foreground'
                  >{tag}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* blog list */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
              {filteredBlogs.map((b,i) => (<BlogPostEntry key={b.id} blog={b as BlogMDX} />))}
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
}

export default BlogPage;

export const Head: HeadFC = () => <title>Blog | Zak Dowsett</title>

export const query = graphql`
query AllBlogs {
    allMdx(
        filter: { fields: { collection: { eq: "blog"}}, frontmatter: { published: { eq: true }}},
        sort: { frontmatter: { date: DESC }}, 
    ) {
        nodes {
            frontmatter {
              title
              subtitle
              tags
              date(formatString: "DD MMMM, YYYY")
              hero_attr
              hero_img {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            fields {
              slug
            }
            id
            excerpt
        }
    }
}
`;
