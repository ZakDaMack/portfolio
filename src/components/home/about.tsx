import { FC, MouseEvent, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

import Link, { LinkProps } from "../link";
import Image from "next/image";


const links: LinkProps[] = [
  { href: "https://github.com/ZakDaMack/", children: "GitHub" },
  { href: "https://linkedin.com/in/zak-dowsett-4a7455131/", children: "LinkedIn" },
  { href: "/blog", children: "Blog", element: "a" }
];

const About: FC = () => {
    const pictureRef = useRef<HTMLDivElement>(null);

    // cursor position within the picture, from -0.9 to 0.9
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateY = useSpring(useTransform(mouseX, [-0.9, 0.9], [6, 18]), { stiffness: 150, damping: 15 });
    const rotateX = useSpring(useTransform(mouseY, [-0.9, 0.9], [6, -6]), { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = pictureRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section id="about" className={cn(
            "py-24 px-4 md:px-24 relative",
            // "before:bg-[url(/lines.svg)] before:bg-cover before:opacity-10 before:left-0 before:right-0 before:bottom-10 before:top-10 before:absolute before:h-full"
        )}>
            <div className="container mx-auto grid lg:grid-cols-2 gap-16">

                {/* Picture */}
                <div className='lg:perspective-distant'>
                    <motion.div
                        ref={pictureRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ rotateX, rotateY }}
                    >
                        <Image
                            src='/zakdowsett.png'
                            alt="Zak Dowsett"
                            width={1920}
                            height={1080}
                            className="rounded-4xl aspect-video drop-shadow-[0_25px_30px_rgba(0,0,0,0.4)] object-cover"
                        />
                    </motion.div>
                </div>
        
                {/* Intro */}
                <div className="mx-auto max-w-5xl self-center space-y-4">
                    <h2 className="text-6xl font-bold">Hi, I&apos;m Zak.</h2>
                    <p className='text-xl'>
                        I&apos;m a <span className="font-semibold">senior software engineer</span> with over <span className="font-semibold">6 years</span> of 
                        professional experience in all areas. I have worked on a variety of projects across the stack, from snazzy, 
                        front-end websites, all the way back to the infrastructure that runs your apps and services
                    </p>
                    <div className='flex gap-6'>
                        {links.map(l => (<Link {...l} />))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;