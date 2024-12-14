import React from "react"
import PortfolioItem from "./portfolio_item";
import { graphql, useStaticQuery } from "gatsby";
import PortfolioMDX from "../../models/portfolio_mdx";

const Portfolio: React.FC = () => {
    const data = useStaticQuery(graphql`
      query {
        allMdx(
          filter: { fields: { collection: { eq: "portfolio"}}},
          sort: { frontmatter: { leave_date: DESC}}  
        ) {
          nodes {
            frontmatter {
              name
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
            body
            id
          }
        }
      }
    `);    

    return (
        <section id="portfolio" className="py-16 px-3 md:px-24 min-h-[90vh] bg-gray-100 dark:bg-gray-800">
            <div className="container max-w-[80em] mx-auto">

                <div className="text-center pb-12">
                    <h2 className="text-6xl pb-4 font-light">Portfolio</h2>
                    {/* <p className="about__intro text-center text-xl">
                        I'm a full stack developer with over 5 years of professional experience.
                        Find out more about me, such as my skills and history, below.
                    </p> */}
                </div>

                <div className="space-y-16">
                    {data.allMdx.nodes.map((p: PortfolioMDX) => (
                        <PortfolioItem
                            key={p.id}
                            name={p.frontmatter.name}
                            logo={p.frontmatter.logo}
                            link={p.frontmatter.link}
                            background={p.frontmatter.backdrop}
                            skills={p.frontmatter.skills}
                            content={p.body}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Portfolio;