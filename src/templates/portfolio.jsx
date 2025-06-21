import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'motion/react';
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"; 

const PortfolioPage = ({ data, children }) => {
    const portfolio = data.mdx;
    const heroImg = getImage(portfolio.frontmatter.backdrop)
    const logo = getImage(portfolio.frontmatter.logo)

    const handleBack = () => navigate(-1)

    return (
      <>
        <Header forceBlur />
        <main className='w-screen min-h-screen'>

          <article className='relative grid md:grid-cols-2 gap-8 p-4 pt-24'>
            <div className='hidden md:block col-span-2'>
              <Button onClick={handleBack} className='rounded-2xl mt-4'>
                <FontAwesomeIcon className='pr-2' icon={faArrowLeft} />
                Go back
              </Button>
            </div>
            <section>
              <GatsbyImage
                image={heroImg}
                objectFit='cover'
                className={cn(
                  'absolute md:relative top-0 left-0 w-full aspect-square md:aspect-video md:rounded-3xl',
                  '[mask:linear-gradient(to_bottom,white,transparent)] md:[mask:none]'
                )}
                alt={`${portfolio?.frontmatter?.name} backdrop`}
              />
            </section>
            <motion.section initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} className='mt-40 md:mt-0 mb-16 z-10'>
              <GatsbyImage
                image={logo}
                objectFit='contain'
                className='h-28 mb-8 [&_img]:object-left'
                alt={`${portfolio?.frontmatter?.name} logo`}
              />
              <h1 className='text-5xl'>{portfolio.frontmatter.name}</h1>
              <p className='text-2xl text-neutral-500'>{portfolio.frontmatter.summary}</p>
              <ul className='mt-6 text-sm flex flex-wrap gap-2'>
                {portfolio.frontmatter.skills.map(s => (
                  <li key={s} className='rounded-3xl py-2 px-3 bg-white/10 dark:bg-black/10 border backdrop-blur-sm'>{s}</li>
                ))}
              </ul>
              <div className='my-8 space-y-4'>
                {children}
              </div>
              <a href={portfolio.frontmatter.link} target='_blank' className='text-foreground relative'>
                <InteractiveHoverButton>Visit site</InteractiveHoverButton>
              </a>
            </motion.section>
          </article>
        </main>
        <Footer />
      </>
    );
}

export default PortfolioPage;

export const Head = ({data}) => <title>{data.mdx?.frontmatter?.name} | Zak Dowsett</title>

export const query = graphql`
  query GetPortfolio($slug: String!) {
    mdx(fields: {slug: { eq: $slug }}) {
      frontmatter {
        name
        summary
        link
        skills
        logo {
          childImageSharp {
            gatsbyImageData
          }
        }
        backdrop {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
`;
