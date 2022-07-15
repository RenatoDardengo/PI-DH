const express = require("express");
const router = express.Router();
const loginAdminController = require("../controllers/LoginAdminController")

router.get("/", loginAdminController.index)


module.exports=router;