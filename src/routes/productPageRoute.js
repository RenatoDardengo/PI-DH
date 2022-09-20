const express = require("express");
const router = express.Router();
const productPageController = require("../controllers/ProductPageController")

router.get("/:id", productPageController.show);

module.exports=router;