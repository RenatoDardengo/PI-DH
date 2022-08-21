const path = require("path");
const sequelize = require("../config/sequelize");
const db = require("../config/sequelize")
const User = require("../models/User");
const { Op } = require("sequelize");
const bcrypt = require("../helpers/bcrypt");


const authUserRote = {
  login: (req, res) =>{
    return res.render ("userLogin", {title:"Login"})
  },

  create:(req, res)=>{
    return res.render ("usercreate")
  },
  authentication:async (req, res)=>{
    res.clearCookie("user");
    res.clearCookie("isAdmin");
     const{userLogin, userPassword} = req.body;
    
     
    const userAuth = await User.findOne({
      where: {
        email:userLogin,
        password:password
      }
      
    })
    if(!userAuth){
      
      return res.render("userLogin",{
        Title:"Login",
        error:{
          message: "Dados incorretos!"},
      });
    };
    

    const user = JSON.parse(
      JSON.stringify(userAuth, ["id", "firstName", "isAdmin"])
    );
    req.session.name = user.firstName;
    req.session.isAdmin = parseInt(user.isAdmin);
    res.cookie("user", user.firstName)
    
    res.redirect("/")


  },
  
  store:async (req, res) => {
    const isAdmin = 0;
    console.log(req.body)
    const { firstName, lastName, cpf, email, telephone, birthDate, genre, password} = req.body;

    

      if (!firstName || !lastName || !cpf || !email || !telephone || !birthDate || !genre || !password ) {
        

          return res.render("usercreate", {
          error: {message: "Atenção!Todos os campos devem ser preenchidos!"}})
      }

      try {
        const result = await sequelize.transaction(async(t)=>{
          const user = await User.create({
            firstName,
            lastName,
            cpf,
            email,
            telephone,
            birthDate,
            genre,
            password: bcrypt.generateHash(password),
            isAdmin
          })
        })
        
      } catch (error) {
        return res.render("usercreate", {
          title: "Cadastrar Produto", user: req.session.name, genre,
          error: {message: `Novo foi possível realizar o cadastro: ${error}`}})
      }

      
      res.redirect("/login")
     

 },

}

module.exports = authUserRote;