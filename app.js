const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require ("method-override");
const admRoute = require("./src/routes/admRoute")
const checkoutRoute = require("./src/routes/checkoutRoute")
const userRouter = require("./src/routes/userRouter");

app.use(express.static(__dirname + "/public"));
app.set ("view engine" , "ejs");
app.set("views", __dirname + "/src/views");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/administrator", admRoute)
app.use("/checkout",checkoutRoute)
app.use("/", userRouter);



app.listen(port, ()=>{
    console.log (`Servidor rodando no endereço http://localhost:${port}`)
})