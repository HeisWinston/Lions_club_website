const {User} = require("../models/");

const userData = [
    {
        user_name: "mirandalovesplants",
        email:"miranda@email.com",
        password: "PASS1234"
    },
    {
        user_name: "billybobsorchids",
        email:"billy@email.com",
        password: "PW1234"
    },
    {
        user_name: "plantlover31",
        email:"plantlover@email.com",
        password: "password1234"
    },
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;