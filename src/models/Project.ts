import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    shortSummary: { type: String, required: true },
    description: { type: String, required: true },
    tech: [String],
    features: [String],

    // Array of strings for images (Screenshot + Gallery)
    screenshots: { type: [String], required: true },
    // Optional YouTube Demo Link
    videoDemo: { type: String },

    // Dynamic repositories (1 for monorepo/fullstack, 2 for client/server)
    repositories: [
        {
            label: {
                type: String, required: true, enum: {
                    values: ['Client', 'Server', 'Source'],
                    message: '{VALUE} is not a valid repository label'
                }
            },
            url: { type: String, required: true },
            _id: false // This prevents Mongoose from adding IDs to each repo link
        }
    ],
    liveLink: { type: String, required: true },
    isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

const Project = models.Project || model("Project", ProjectSchema);
export default Project;