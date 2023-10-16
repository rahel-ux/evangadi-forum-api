const router = require('express').Router()

const auth = require('../middleware/auth');
const {createUser, getusers, getUserById, login} =require("./user.controller")

router.post("/", createUser)
router.get("/all", getusers);
router.get("/", auth , getUserById);
router.post("/login", login);





module.exports = router 