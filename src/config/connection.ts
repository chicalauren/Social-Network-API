import mongoose from 'mongoose';

const db = async (): Promise<typeof mongoose.connection> =>{
    try {
        // TO DO: insert below
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB');
        console.log('MongoDB connected successfully!');
        return mongoose.connection;
    } catch(error) {
        console.error('MongoDB connection error:', error);
        throw new Error('Database connection failed.');
    }
}

export default db;