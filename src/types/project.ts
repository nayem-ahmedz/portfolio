export interface ProjectCardT{
    _id: string;
    name: string;
    slug: string;
    category: string;
    shortSummary: string;
    tech: string[];
    screenshots: string[];
}

export interface ProjectT {
    _id: string;
    name: string;
    category: string;
    description: string;
    tech: string[];
    features: string[];
    screenshots: string[];
    videoDemo?: string;
    repositories: { label: string; url: string }[];
    liveLink: string;
}