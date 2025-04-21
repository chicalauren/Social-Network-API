// src/index.ts
import express from 'express';
import { thoughtRoute } from './routes/api/thoughtRoute.js'; // use .js because ESM
import { userRoute } from './routes/api/userRoute.js'; // use .js because ESM
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use('/api/thoughts', thoughtRoute);
app.use('/api/users', userRoute);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
