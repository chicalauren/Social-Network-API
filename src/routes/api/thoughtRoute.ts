import {Router} from 'express';
const router= Router();
import {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} from '../../controllers/thoughtController';
router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reaction').post(addReaction)

router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

export { router as thoughtsRouter};