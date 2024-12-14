import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import HeroText from "./hero_text";

const Splash: React.FC = () => (
  <section className="h-screen grid bg-backdrop bg-cover bg-center">
    <div className="mx-auto text-center container flex flex-col-reverse md:flex-row gap-8 justify-center items-center">
      <HeroText />
      <StaticImage 
        src='../../images/zakdowsett.png'
        alt="Zak Dowsett" 
        className="w-40 md:w-[250px] rounded-full drop-shadow-lg"
      />
    </div>
  </section>
);

export default Splash;
