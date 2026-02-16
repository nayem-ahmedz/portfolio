import Project from "@/models/Project";
import connectDB from "./db";

export default async function projectDetails(slug: string) {
    try {
        await connectDB();
        const project = await Project.findOne({ slug }).lean();
        if (!project) return null;
        
        return JSON.parse(JSON.stringify(project));
    } catch (err) {
        console.error('Error fetching project details:', err);
        return null;
    }
}