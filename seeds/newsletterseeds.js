const {Newsletter} = require("../models/");

const userData = [
    {
        email:"miranda@email.com",
    },
    {
        email:"billy@email.com",
    },
    {
        email:"plantlover@email.com",
    },
]

const seedUser = () => Newsletter.bulkCreate(userData);
module.exports = seedUser;