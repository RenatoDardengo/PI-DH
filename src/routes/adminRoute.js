const express = require("express");
const router = express.Router();
const adminController = require("../controllers/AdminController")

router.get("/", adminController.index)
//rotas produtos
router.get("/product", adminController.show)
router.get("/product/create", adminController.create)
router.get("/product/edit", adminController.edit)
router.get("/product/delete", adminController.delete)


module.exports=router;