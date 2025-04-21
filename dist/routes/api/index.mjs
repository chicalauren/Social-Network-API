import { Router } from 'express';
import { userRoute } from './userRoute.js';
import { thoughtRoute } from './thoughtRoute.js';
const router = Router();
router.use('/users', userRoute);
router.use('/thought', thoughtRoute);
export default router;
