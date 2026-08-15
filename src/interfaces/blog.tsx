enum BlogType {
    Article = 'article',
    CaseStudy = 'case-study',
}

interface CaseStudyStat {
    prefix?: string;
    suffix?: string;
    value?: number;
    subtext: string;
}

interface CaseStudyDecision {
    title: string;
    description: string;
}

interface CaseStudy {
    company: string;
    role: string;
    skills: string[];
    stats: CaseStudyStat[];
    problem: string;
    decisions: CaseStudyDecision[];
    outcome: string;
}

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
    type: BlogType;
    case_study: CaseStudy | null;
}

export default Blog;
export { BlogType };
export type { CaseStudy };
