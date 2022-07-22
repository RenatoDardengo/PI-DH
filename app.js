const express = require("express");
const app = express();
const port = 3006;
const methodOverride = require("method-override");
const admRoute = require("./src/routes/admRoute")
const checkoutRoute = require("./src/routes/checkoutRoute")
const userRouter = require("./src/routes/userRouter");
const clienteRoute = require("./src/routes/clienteRoute");
const paginaDeProdutoRoute = require("./src/routes/paginaDeProdutoRoute")
const confirmacaoRoute = require("./src/routes/confirmacaoRoute")
const loginAdminRoute = require ("./src/routes/loginAdminRoute")

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/administrator", admRoute)
app.use("/checkout", checkoutRoute)
app.use("/", userRouter);
app.use("/painelCliente", clienteRoute);
app.use("/paginaDeProduto", paginaDeProdutoRoute)
app.use("/confirmacao", confirmacaoRoute)
app.use("/admin", loginAdminRoute);



app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})