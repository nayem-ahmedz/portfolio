import Project from "@/models/Project";
import connectDB from "./db";

export default async function allProjects() {
    try {
        await connectDB();
        const projects = await Project.find({})
            .select('-_id name slug category shortSummary tech screenshots')
            .sort({ createdAt: -1 })
            .lean();
        return projects || [];
    } catch (err) {
        console.log('error', err);
        return [];
    }
}