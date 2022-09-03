let user = require('../public/user.json')


// get random api
module.exports.getRandomUser = (req, res) => {

    res.status(200).json({
        success: true,
        message: 'success',
        data: user[Math.floor(Math.random() * (user.length + 1))]
    })
}

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



// filter by id
module.exports.getUserById = (req, res) => {
    const { id } = req.params
    const foundUser = user.find(user => user.id === Number(id))
    res.status(200).send({
        success: true,
        message: 'success',
        data: foundUser
    })
}


// save/post user api controller
module.exports.saveAUser = (req, res) => {
    const { id, name, gender, contact, address, photoUrl } = req.body


    if (id && name && gender && contact && address && photoUrl) {
        user.push(req.body)
        res.status(200).send({
            success: true,
            message: 'success',
            data: user
        })
    }
    else {
      res.send({
        success: false,
        error: "Missing property."
    })
    }
    res.status(500).send({
        success: false,
        error: 'Internal server error.'
    })
}

// update user api controller
module.exports.updateUser = (req, res) => {
    const newData = req.body
    const { id } = req.params
    const filter = { _id: id }

    const oldData = user.find(user => user.id === Number(id))

    // newData.id = id
    // newData.name = req.body.name
    // newData.gender = req.body.gender
    // newData.contact = req.body.contact
    // newData.address = req.body.address
    // newData.photoUrl = req.body.photoUrl

    res.status(200).send({
        success: true,
        message: 'success',
        data: { ...oldData, ...newData }
    })
}


// user delete api controller
module.exports.deleteUser = (req, res) => {
    const { id } = req.params
    const filter = { _id: id }

    user = user.filter(user => user.id !== Number(id))

    res.status(200).send({
        success: true,
        message: 'success',
        data: user
    })
    res.status(500).send({
        success: false,
        error: 'Internal server error.'
    })
}