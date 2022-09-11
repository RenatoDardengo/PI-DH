const express = require("express");
const router = express.Router();
const cartController = require("../controllers/CartController")
const crypto= require ("crypto");
const multer = require("multer");
const upload = require("../helpers/multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads/");
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

router.get("/", cartController.index)
router.get("/:id",upload.single("picture-input"), cartController.show)
// router.get("/product/create", confirmacao.create)
// router.get("/product/edit", confirmacao.edit)
// router.get("/product/delete", confirmacao.delete)

module.exports=router;