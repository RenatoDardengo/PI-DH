const fs = require("fs");
const path = require("path");
const db = require("../config/sequelize")
const Admin = require("../models/Admin")

const authenticationAdminController={

  login: (req, res)=>{
    req.session.destroy();
    res.clearCookie("user");
    res.clearCookie("permission");
      return res.render ("AdminLogin", {title:"Login Administrador"})
  },

  authentication:async (req, res)=> {
    res.clearCookie("user");
    res.clearCookie("permission");

    const {userName, userPassword}=req.body;

    const userAuth = await Admin.findOne({
      where: {
        name:userName,
        password:userPassword
      }
      
    })

    if(!userAuth){
      
      return res.render("adminLogin",{
        Title:"Login Administrador",
        error:{
          message: "Dados incorretos!"},
      });
    }

    const user = JSON.parse(
      JSON.stringify(userAuth, ["id", "name","permission", "isAdmin"])
    );
    req.session.name = userAuth.name;
    req.session.permission = parseInt(userAuth.permission);
    req.session.isAdmin = parseInt(userAuth.isAdmin);
    res.cookie("user", user.name)
    res.cookie("permission", user.permission)
    res.redirect("/administrator")
    
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("user");
    res.clearCookie("permission");
    res.redirect("/admin");
  },
  
}

module.exports = authenticationAdminController;