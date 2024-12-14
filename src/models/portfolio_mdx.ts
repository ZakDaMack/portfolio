import { ImageDataLike } from "gatsby-plugin-image";

export default interface PortfolioMDX {
    id: string;
    body: string;
    frontmatter: {
        name: string;
        link: string;
        logo: ImageDataLike
        backdrop: ImageDataLike
        skills: string[];
    }
}