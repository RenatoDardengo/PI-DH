const express = require("express");
const router = express.Router();
const confirmacaoController = require("../controllers/ConfirmacaoController")

router.get("/", confirmacaoController.index)
// router.get("/product", confirmacao.show)
// router.get("/product/create", confirmacao.create)
// router.get("/product/edit", confirmacao.edit)
// router.get("/product/delete", confirmacao.delete)

module.exports=router;