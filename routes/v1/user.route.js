const express = require("express")
const userController = require("../../controller/user.controller")

const router = express.Router()

router
    .route('/')
    .get(userController.getAllUser)
    .post(userController.saveAUser)

router
    .route('/:id')
    .delete(userController.deleteUser)


module.exports = router