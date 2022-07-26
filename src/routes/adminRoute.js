const express = require("express");
const router = express.Router();
const adminController = require("../controllers/AdminController")
const isAuthenticated = require("../middlewares/guest")
const Authenticated = require("../middlewares/authentication");
const { authentication } = require("../controllers/AuthenticationAdminController");


router.get("/", adminController.index)

//rotas produtos
router.get("/product", adminController.show)
router.get("/product/create", adminController.create)
router.post("/product/create", adminController.store)
router.get("/product/edit/:id", adminController.edit)
router.get("/product/delete/:id", adminController.delete)
router.delete("/product/delete/:id", adminController.destroy)


module.exports=router;