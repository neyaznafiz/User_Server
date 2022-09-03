const user = require('../public/user.json')

module.exports.getAllUser = (req, res, next) => {

    res.status(200).json({
        success: true,
        message: 'success',
        data: user
    })
    res.status(500).send({
        success: false,
        error: 'Internal server error.'
    })
}