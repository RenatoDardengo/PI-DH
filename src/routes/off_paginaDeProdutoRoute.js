const express = require("express");
const router = express.Router();
const paginaDeProdutoController = require("../controllers/PaginaDeProdutoController")

router.get("/", paginaDeProdutoController.index)
// router.get("/product", paginaDeProdutoController.show)
// router.get("/product/create", paginaDeProdutoController.create)
// router.get("/product/edit", paginaDeProdutoController.edit)
// router.get("/product/delete", paginaDeProdutoController.delete)

module.exports=router;