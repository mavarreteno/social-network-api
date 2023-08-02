const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, addReaction, removeReaction, deleteThought, } = require('../../controllers/thought');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;