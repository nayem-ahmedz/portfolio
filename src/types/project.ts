export interface UnifiedProject {
    id: number | string; // Flexibility for MongoDB ObjectIDs later
    slug: string;
    name: string;
    category: "react-js" | "mern-stack" | "backend" | "full-stack";
    isFeatured: boolean;
    stack: {
        type: "Frontend" | "Backend" | "Fullstack";
        frontend?: string[];
        backend?: string[];
        database?: string[];
        deployment?: string[];
    };
    shortSummary: string;
    description: string;
    tech: string[];
    features: string[];
    media: {
        screenshot: string;
        galleryImages: string[]; // Use an empty array [] if none
        youtubeVideoId?: string;
    };
    links: {
        live: string;
        github: {
            client?: string; // Changed to optional for projects without repos
            server?: string;
            mono?: string;   // Useful if you ever use a Monorepo
        };
        apiDocs?: string;
    };
    metadata: {
        difficulty: "Beginner" | "Intermediate" | "Advanced";
        createdAt: string; // ISO string format
        updatedAt: string; // ISO string format
    };
}