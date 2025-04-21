"use strict";
const router = require('express').Router();
const { getThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../controllers/thoughtController');
// Rutas para los pensamientos
router.route('/')
    .get(getThoughts)
    .post(createThought);
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);
// Rutas para las reacciones
router.route('/:thoughtId/reactions')
    .post(addReaction);
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);
module.exports = router;
