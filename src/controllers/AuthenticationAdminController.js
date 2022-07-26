const fs = require("fs");
const path = require("path");
const authenticationAdminController={
  login: (req, res)=>{
    req.session.destroy();
    res.clearCookie("user");
    res.clearCookie("permission");
      return res.render ("AdminLogin", {title:"Login Administrador"})
  },

  authentication:(req, res)=> {
    res.clearCookie("user");
    res.clearCookie("permission");

    const usersJson = fs.readFileSync(
      path.join(__dirname,"..", "data", "users.json"), "utf-8"
    );
    const users = JSON.parse(usersJson);

    const {userName, password}=req.body;

    const userAuth = users.find(user=>{
      if(user.name===userName){
        if(user.password===password){
          return true;
        }
      }
    });

    if(!userAuth){
      
      return res.render("adminLogin",{
        Title:"Login Administrador",
        error:{
          message: "Dados incorretos!"},
      });
    }

    const user = JSON.parse(
      JSON.stringify(userAuth, ["id", "name","permission"])
    );
    req.session.name = userAuth.name;
    req.session.permission = userAuth.permission;
    res.cookie("user", user.name)
    res.cookie("permission", user.permission)
    res.redirect("/administrator")
    
  },
  
  logout: (req,res)=>{
    req.session.destroy();
    res.clearCookie("user");
    res.clearCookie("permission");
    res.redirect("/admin");

  }
}

module.exports = authenticationAdminController;