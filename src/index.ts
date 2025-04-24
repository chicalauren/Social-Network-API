import { Router } from 'express';
import apiRoutes from './routes/api/index.js';

const router = Router();

router.use('/api', apiRoutes)

export default router;
