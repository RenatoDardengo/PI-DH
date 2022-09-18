const express = require("express");
const router = express.Router();
const productPageController = require("../controllers/ProductPageController")

// router.get("/", productPageController.index)
router.get("/:id", productPageController.show);
// router.get("/product", paginaDeProdutoController.show)
// router.get("/product/create", paginaDeProdutoController.create)
// router.get("/product/edit", paginaDeProdutoController.edit)
// router.get("/product/delete", paginaDeProdutoController.delete)

module.exports=router;