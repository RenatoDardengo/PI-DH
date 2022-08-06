const express = require("express");
const router = express.Router();
const adminController = require("../controllers/AdminController")
const isAuthenticated = require("../middlewares/guest");
const crypto= require ("crypto");

const multer = require("multer");
const upload = require("../helpers/multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../../uploads/");
  },
  filename: (req, file, cb) => {
    // Pegar extensão do arquivo
    const extension = file.originalname.split(".")[1];
    // Gera string randomica
    const newName = crypto.randomBytes(10).toString("hex");
    // Altera o nome do arquivo para a string randomica
    cb(null, `${newName}.${extension}`);
  },
});



router.get("/", isAuthenticated, adminController.index)

//rotas produtos
router.get("/product", isAuthenticated, adminController.show)
router.get("/product/create", isAuthenticated, adminController.create)
router.post("/product/create", isAuthenticated, upload.single("picture-input"),adminController.store)
router.get("/product/edit/:id",isAuthenticated, adminController.edit)
router.get("/product/delete/:id", isAuthenticated, adminController.delete)
router.delete("/product/delete/:id",isAuthenticated, adminController.destroy)


module.exports=router;