import express from 'express';
import db from './config/connection.js';
import userRouter from './routes/userRoute.js';
import thoughtRouter from './routes/thoughtRoute.js';
const app = express();
const PORT = process.env.PORT || 3001;
app.use('/api/users', userRouter);
app.use('/api/thoughts', thoughtRouter);
(async () => {
    try {
        await db();
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server on http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
})();
