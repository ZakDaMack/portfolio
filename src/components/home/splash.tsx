import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import HeroText from "./hero_text";

const Splash: React.FC = () => (
  <section className="h-screen p-4">
    <div className="grid h-full bg-backdrop bg-cover bg-center rounded-xl">
      <div className="mx-auto text-center container flex flex-col-reverse md:flex-row gap-8 justify-center items-center">
        <HeroText />
        <StaticImage 
          src='../../images/zakdowsett.png'
          alt="Zak Dowsett" 
          className="w-40 md:w-[250px] rounded-full drop-shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Splash;
