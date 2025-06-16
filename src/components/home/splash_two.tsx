import React from "react"

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

const Splash: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement|null>(null);
  const [isPaused, setIsPaused] = React.useState(false)

  const toggle = () => {
    videoRef.current?.paused ? videoRef.current?.play() : videoRef.current?.pause()
    setIsPaused(videoRef.current?.paused ?? false);
  }

  return (
    <section className="h-screen p-4">
      <div className="grid h-full bg-nord-4 dark:bg-nord-1 bg-center rounded-3xl overflow-hidden relative">
        <motion.video 
          ref={videoRef}
          autoPlay loop muted
          initial={{opacity: 0}} 
          whileInView={{opacity: 1}}  
          transition={{duration: 0.8}}
          className="h-full w-full object-cover"
          poster='/backdrop_poster.png'
        >
          <source src="/backdrop_1080p.mp4" type="video/mp4" />
          <source src="/backdrop_240p.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-center">
          <motion.h2 
            initial={{opacity: 0, y: 100}} 
            whileInView={{opacity: 1, y: 0}}  
            viewport={{once: true}}
            transition={{delay: 0.3, duration: 0.8}}
            className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-center text-5xl sm:text-[10rem] font-semibold leading-none text-transparent"
          >
            Zak Dowsett
          </motion.h2>
          <motion.h3
            initial={{opacity:0}} 
            whileInView={{opacity:1}}  
            viewport={{once: true}}
            transition={{delay: 1}}
            className="text-center text-2xl sm:text-4xl pt-3 pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-white/80 to-slate-900/10 bg-clip-text font-semibold leading-none text-transparent"
          >
            Dev Extraordinaire!
          </motion.h3>
        </div>
        <Button size='icon' variant='ghost' className="bg-transparent text-white absolute right-0 bottom-0 z-10" onClick={toggle}>
          <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
        </Button>
      </div>
    </section>
  );
}

export default Splash;
