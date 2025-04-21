const thoughtRouter = require('express').Router();
const { getThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../controllers/thoughtController');
// Rutas para los pensamientos
thoughtRouter.route('/')
    .get(getThoughts)
    .post(createThought);
thoughtRouter.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);
// Rutas para las reacciones
thoughtRouter.route('/:thoughtId/reactions')
    .post(addReaction);
thoughtRouter.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);
module.exports = thoughtRouter;
export default thoughtRouter;
