const express = require("express")
const userController = require("../../controller/user.controller")

const router = express.Router()

// get random user route
router
    .route('/random')
    .get(userController.getRandomUser)


// normal route
router
    .route('/')
    .get(userController.getAllUser)
    .post(userController.saveAUser)

// id route
router
    .route('/:id')
    .get(userController.getUserById)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)


module.exports = router