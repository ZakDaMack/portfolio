import { FC } from "react"

import Zak from '@/assets/zakdowsett.png'
import HeroText from "@/components/hero_text";

const Splash: FC = () => (
  <section className="h-screen grid bg-backdrop bg-cover bg-center">
    <div className="mx-auto text-center container flex flex-col-reverse md:flex-row gap-8 justify-center items-center">
      <HeroText />
      <img 
        src={Zak} 
        alt="Zak Dowsett" 
        className="w-40 md:w-[250px] rounded-full drop-shadow-lg"
      />
    </div>
  </section>
);

export default Splash;
