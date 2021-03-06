const router = require('express').Router();

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

//api/users/:userId/friends/

router 
    .route ('/:id/friends/:friendsId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;