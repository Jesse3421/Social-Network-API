const router = require('express').Router();

//const { deleteFriend } = require('../../controllers/user-controller');
//const { addFriend } = require('../../controllers/user-controller');

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

//api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

//api/users/:userId
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//api/users/:userId/friends/:friendId
router  
    .route('/users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;