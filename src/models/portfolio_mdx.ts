import { ImageDataLike } from "gatsby-plugin-image";

export default interface PortfolioMDX {
    id: string;
    body: string;
    fields: {
        slug: string;
    }
    frontmatter: {
        name: string;
        summary: string;
        link: string;
        logo: ImageDataLike
        backdrop: ImageDataLike
        skills: string[];
    }
}