import { Router } from 'express';
const userRouter = Router();
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';
userRouter.route('/')
    .get(getUsers)
    .post(createUser);
userRouter.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
module.exports = userRouter;
export default userRouter;
