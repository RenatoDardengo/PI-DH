const express = require("express");
const router = express.Router();
const cartController = require("../controllers/CartController")

router.get("/", cartController.index)
// router.get("/product", confirmacao.show)
// router.get("/product/create", confirmacao.create)
// router.get("/product/edit", confirmacao.edit)
// router.get("/product/delete", confirmacao.delete)

module.exports=router;