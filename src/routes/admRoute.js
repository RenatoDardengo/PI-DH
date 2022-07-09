const express = require("express");
const router = express.Router();
const admController = require("../controllers/AdmController")

router.get("/", admController.index)
router.get("/product", admController.show)
router.get("/product/create", admController.create)
router.get("/product/edit", admController.edit)
router.get("/product/delete", admController.delete)

module.exports=router;