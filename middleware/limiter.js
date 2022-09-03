const { default: rateLimit } = require("express-rate-limit")

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 40,
    standardHeaders: true,
    legacyHeaders: false,
})

module.exports = limiter