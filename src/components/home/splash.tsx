"use client";

import { FC } from "react";
import { motion } from "motion/react";

import Link from "../link";
import { LightRays } from "../ui/light-rays";
import { InstallTerminal, ReactCodeTerminal } from "./splash_terminal";
import { MouseSimpleIcon, CaretDownIcon } from "@phosphor-icons/react";

const Splash: FC = () => {
  return (
    <section className="h-screen p-4">
      <div className="grid h-full bg-nord-4 dark:bg-nord-1 bg-center rounded-3xl overflow-hidden relative">
        {/* Backdrop */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full object-cover brightness-50"
          src="/mountain_hero.jpg"
          alt="Background image of a mountain range with a lake in the foreground"
        />

        <LightRays />

        {/* Grid floor */}
        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[20%] overflow-hidden">
          <RetroGrid angle={80} />
        </div> */}

        {/* Angled terminals */}
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
          <div className="absolute top-1/2 right-8 w-120 -translate-y-1/2">
            <InstallTerminal side="right" />
          </div>
          <div className="absolute top-1/2 left-16 w-172 -translate-y-1/2">
            <ReactCodeTerminal side="left" />
          </div>
        </div>

        {/* Container */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-t from-black/80 to-transparent">
          <div className="relative flex h-full flex-col gap-3 justify-center">

            {/* Looking for opportunities toast */}
            <motion.div 
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2, duration: 0.5 }}
              className="rounded-3xl mx-auto py-2 px-4 border border-white/10 bg-white/5 backdrop-blur-2xl flex gap-2 items-center"
            >
              <div className="relative flex size-3">
                <div className="relative rounded-full bg-nord-14 size-3"></div>
                <div className="absolute rounded-full bg-nord-14 size-3 animate-ping duration-[2s]"></div>
              </div>
              <span className="uppercase text-sm text-nord-4">Available for new opportunities</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-white to-white/60 bg-clip-text text-center text-2xl sm:text-[8rem] font-semibold leading-none text-transparent"
            >
              Zak Dowsett
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center text-lg sm:text-4xl pointer-events-none whitespace-pre-wrap text-nord-9"
            >
              Senior Software Engineer
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center text-base sm:text-xl font-light pointer-events-none whitespace-pre-wrap text-nord-4 max-w-xl mx-auto"
            >
              Building scalable, production-ready software for cloud, web and mobile applications to deliver real-world impact.
            </motion.h4>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex justify-center gap-6 pt-10"
            >
              <Link href="/resume.pdf" target='_blank' element="a">View my CV</Link>
              <Link href="/blog">Read a case study</Link>
            </motion.div>

          </div>
        </div>

        {/* Scroll CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-nord-4 text-sm"
        >
          <p className="pb-2 text-sm">Scroll down to explore</p>
          <MouseSimpleIcon className="size-14 mx-auto" weight="thin" />
          <CaretDownIcon className="size-3 transition-transform animate-bounce -translate-y-6 mx-auto" weight="bold" />
        </motion.div>
      </div>
    </section>
  );
};

export default Splash;
