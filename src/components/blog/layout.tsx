import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import QuickLinks from "@/components/home/quick_links";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { MenuIcon } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode
}

const BlogLayout: React.FC<LayoutProps> = ({ children }) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const data: Queries.BlogHeaderListQuery = useStaticQuery(graphql`
      query BlogHeaderList {
        allMdx(
          filter: { fields: { collection: { eq: "blog"}}, frontmatter: { published: { eq: true }}},
          sort: { frontmatter: { date: DESC }},
          limit: 4
        ) {
          nodes {
            id
            frontmatter {
              title
              subtitle
              hero_img {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }   
    `);

    const firstLatest = data.allMdx.nodes[0]!;
    return (
        <>
            <header className='fixed z-10 border-b border-light-gray w-screen bg-nord-1 text-white shadow-lg'>
                <div className='mx-auto container p-2 flex items-center space-x-2'>
                    <Link to='/'>
                        <StaticImage 
                            className='w-10 h-10 rounded-lg'
                            src='../../images/z.png' 
                            alt='Home'
                        />
                    </Link>
                    <span className='mx-4 text-2xl'>/</span>
                    <Link className='text-white text-xl' to='/blog'>
                        Blog
                    </Link>

                    <div className='grow md:grow-0' />

                    {/* menu */}
                    <NavigationMenu className='px-4 hidden md:block'>
                        <NavigationMenuList className='grow w-full'>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='bg-transparent hover:bg-nord-2'>
                                    Latest
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-nord-5 dark:bg-nord-2 border-0 shadow-lg">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-start rounded-md bg-nord-4 dark:bg-nord-3 p-3 no-underline outline-none focus:shadow-md"
                                                    href={firstLatest.fields?.slug!}
                                                >
                                                    <GatsbyImage 
                                                        image={firstLatest.frontmatter!.hero_img!.childImageSharp!.gatsbyImageData!} 
                                                        className='rounded'
                                                        alt='hero image'
                                                    />
                                                    <div className='p-2'>
                                                        <h3 className="text-md pb-2 font-medium text-nord-0 dark:text-nord-4">
                                                            {firstLatest.frontmatter?.title}
                                                        </h3>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            {firstLatest.frontmatter?.subtitle}
                                                        </p>
                                                    </div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        {data.allMdx.nodes.slice(1).map(post => (
                                            <li className="hover:bg-nord-4 dark:hover:bg-nord-3 p-3 rounded-md">
                                                <NavigationMenuLink asChild>
                                                    <a href={post.fields!.slug!}>
                                                        <h3 className="text-md pb-2 font-medium text-nord-0 dark:text-nord-4">
                                                            {post.frontmatter?.title}
                                                        </h3>
                                                        <p className="text-sm leading-tight text-muted-foreground line-clamp-2">
                                                            {post.frontmatter?.subtitle}
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Drawer
                        direction='bottom'
                        open={open}
                        onClose={() => setOpen(false)}
                        onOpenChange={(o) => setOpen(o)}
                    >
                        <DrawerTrigger className='md:hidden'>
                            <MenuIcon />
                        </DrawerTrigger>
                        <DrawerContent>
                            <section>
                                <h3 className='p-3 font-bold text-xl'>Latest</h3>
                                <ul>
                                    {data.allMdx.nodes.map(post => (
                                        <li className="hover:bg-muted p-3">
                                            <a href={post.fields!.slug!}>
                                                <h3 className="text-md pb-2 font-medium text-black">
                                                    {post.frontmatter?.title}
                                                </h3>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    {post.frontmatter?.subtitle}
                                                </p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </DrawerContent>
                    </Drawer>
                </div>
            </header>
            <main className='w-screen min-h-screen'>
                <div className='h-[48px]' />
                {children}
            </main>
            <QuickLinks />
        </>
    );
}

export default BlogLayout;