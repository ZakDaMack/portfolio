import { FC } from "react";

import Blog from "./blog";
import About from "./about";
import Splash from "./splash";
import Portfolio from "./portfolio";
import QuickLinks from "./quick_links";

const Home: FC = () => {
    return (
        <main className="w-screen max-w-full">
            <Splash />
            <About />
            <Portfolio />
            <Blog />
            <QuickLinks />
        </main>
    );
}

export default Home;