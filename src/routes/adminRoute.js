const express = require("express");
const router = express.Router();
const adminController = require("../controllers/AdminController")
const isAuthenticated = require("../middlewares/guest")
const Authenticated = require("../middlewares/authentication");
const { authentication } = require("../controllers/AuthenticationAdminController");


router.get("/", isAuthenticated, adminController.index)

//rotas produtos
router.get("/product", isAuthenticated, adminController.show)
router.get("/product/create", isAuthenticated, adminController.create)
router.post("/product/create", isAuthenticated, adminController.store)
router.get("/product/edit/:id",isAuthenticated, adminController.edit)
router.get("/product/delete/:id", isAuthenticated, adminController.delete)
router.delete("/product/delete/:id",isAuthenticated, adminController.destroy)


module.exports=router;