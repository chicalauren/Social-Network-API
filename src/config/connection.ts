import mongoose from 'mongoose';

const db = async (): Promise<typeof mongoose.connection> =>{
    try {
        // TO DO: insert below
        // await mongoose.connect(process.env.MONGODB_URI || 'insert_your_mongodb_uri_here', {);
        return mongoose.connection;
    } catch(error) {
        throw new Error('Database connection failed.');
    }
}

export default db;