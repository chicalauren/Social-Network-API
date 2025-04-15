import express from 'express';
import router from './routes/index.js';
import db from './config/connection.js';

const startServer = async () => {
await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});
};

startServer();