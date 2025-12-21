interface Blog {
    id: string;
    title: string;
    subtitle: string; 
    date: string;
    formatted_date: string;
    hero_img: string;
    hero_attr: string;
    published: boolean;
    tags: string[];
}

export default Blog;  