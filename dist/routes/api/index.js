import { Router } from 'express';
import { usersRoutes } from './userRoute';
import { thoughtsRouter } from './thoughtRoute';
const router = Router();
router.use('/users', usersRoutes);
router.use('/thought', thoughtsRouter);
export default router;
