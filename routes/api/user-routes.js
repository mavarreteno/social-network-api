const router = require('express').Router();
const { getUsers, getSingleUser, createUser, deleteUser, addFriend, removeFriend, updateUser } = require('../../controllers/user');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;