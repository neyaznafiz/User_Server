let user = require('../public/user.json')


// get all user and limit user api controller
module.exports.getAllUser = (req, res,) => {
    const { limit } = req.query

    res.status(200).json({
        success: true,
        message: 'success',
        data: user.slice(0, limit)
    })
    res.status(500).send({
        success: false,
        error: 'Internal server error.'
    })
}


// save/post user api controller
module.exports.saveAUser = (req, res) => {
    const all = req.body
    user.push(all)
    res.send(user);
}