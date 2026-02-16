import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable');
}

// Global is used to maintain a cached connection across hot reloads
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached?.conn) return cached.conn;
    if (!cached?.promise) {
        console.log('Creating new MongoDB connection...');
        cached!.promise = mongoose.connect(MONGO_URI!, { bufferCommands: false });
    }

    try {
        cached!.conn = await cached!.promise;
    } catch (e) {
        cached!.promise = null;
        throw e;
    }
    return cached!.conn;
}

export default connectDB;