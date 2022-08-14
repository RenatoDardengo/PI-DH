const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;
const session = require ("express-session");
const cookieParser = require ("cookie-parser")

const methodOverride = require("method-override");
const adminRoute = require("./src/routes/adminRoute")
const checkoutRoute = require("./src/routes/checkoutRoute")
const userRouter = require("./src/routes/userRouter");
const clienteRoute = require("./src/routes/clienteRoute");
const productPageRoute = require("./src/routes/productPageRoute")
const confirmationRoute = require("./src/routes/confirmationRoute")
const authenticationAdminRoute = require("./src/routes/authenticationAdminRoute")
const createUserRoute = require("./src/routes/createUserRoute")


app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(session({ secret: process.env.SECRET_WORD }));
app.use("/administrator", adminRoute)
app.use("/checkout", checkoutRoute)
app.use("/", userRouter);
app.use("/painelCliente", clienteRoute);
app.use("/productPage", productPageRoute)
app.use("/confirmation", confirmationRoute)
app.use("/admin", authenticationAdminRoute);
app.use("/create", createUserRoute);



app.listen(port, () => {

    console.log(`Servidor rodando no endereço http://localhost:${port}`)

})