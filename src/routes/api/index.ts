import { Router } from 'express';
import { usersRoutes } from './usersRoutes.js';
import { thoughtsRouter } from './thoughtsRoutes.js';

const router = Router();

router.use('/users', usersRoutes);
router.use('/thought', thoughtsRouter);

export default router;