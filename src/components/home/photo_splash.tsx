"use client";

import { FC, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { InstallTerminal, ReactCodeTerminal } from "./splash_terminal";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance])
// }

const PhotoSplash: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const toggle = () => {
    const trigger = videoRef.current?.paused
      ? videoRef.current?.play
      : videoRef.current?.pause;
    trigger?.call(videoRef.current);
    setIsPaused(videoRef.current?.paused ?? false);
  };

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
        
        {/* Angled terminals */}
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
          <div className="absolute top-1/2 right-16 w-120 -translate-y-1/2">
            <InstallTerminal side="right" />
          </div>
          <div className="absolute top-1/2 left-16 w-172 -translate-y-1/2">
            <ReactCodeTerminal side="left" />
          </div>
        </div>

        {/* Container */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-t from-black/80 to-transparent">
          <div className="relative flex h-full flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-white to-white/60 bg-clip-text text-center text-5xl sm:text-[10rem] font-semibold leading-none text-transparent"
            >
              Zak Dowsett
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center text-2xl sm:text-4xl pt-3 pointer-events-none whitespace-pre-wrap bg-linear-to-t from-white/80 to-slate-900/10 bg-clip-text font-semibold leading-none text-transparent"
            >
              Turning ideas into production-ready software.
            </motion.h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSplash;
