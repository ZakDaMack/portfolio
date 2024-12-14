import { ImageDataLike } from "gatsby-plugin-image";

export default interface BlogMDX {
    id: string;
    body: string;
    excerpt: string;
    frontmatter: {
        title: string;
        subtitle: string;
        hero_img: ImageDataLike
        hero_attr: string;
        date: string;
        published: boolean;
        tags: string[];
    }
    fields: {
        slug: string;
    }
}