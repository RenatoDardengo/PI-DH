const express = require("express");
const router = express.Router();
const productPageController = require("../controllers/ProductPageController")

// router.get("/", productPageController.index)
<<<<<<< HEAD
router.get("/:id", productPageController.show);
=======
router.get("/", productPageController.show);
>>>>>>> 55d478dac771fbeca55b6ddf2cdc6000a93e2f4b
// router.get("/product", paginaDeProdutoController.show)
// router.get("/product/create", paginaDeProdutoController.create)
// router.get("/product/edit", paginaDeProdutoController.edit)
// router.get("/product/delete", paginaDeProdutoController.delete)

module.exports=router;