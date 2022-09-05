const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.index);
router.get("/produtos",userController.produts);

router.get("/paginaProduct/:id", userController.show);
router.get("/procurar", userController.procurar);


module.exports=router;
 