const express = require('express')
const cors = require('cors')
const userRoute = require('./routes/v1/user.route')
const limiter = require('./middleware/limiter')


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//the rate limiting middleware to all requests
app.use(limiter)


// route
app.use('/api/v1/user', userRoute)


// home route
app.get('/', (req, res) => {
    res.send('The user server is running...')
})


// not found api
app.all('*', (req, res) => {
    res.send('Route not found.')
})


// server running api
app.listen(port, () => {
    console.log('Listening to port', port);
})


// others error handler
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});