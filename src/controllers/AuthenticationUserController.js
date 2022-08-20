const path = require("path");
const sequelize = require("../config/sequelize");
const db = require("../config/sequelize")
const User = require("../models/User");
const { Op } = require("sequelize");


const authUserRote = {
  login: (req, res) =>{
    return res.render ("userLogin", {title:"Login"})
  },

  create:(req, res)=>{
    return res.render ("usercreate")
  },
  
  store:async (req, res) => {
    
    const { firstName, lastName, cpf, email, telephone, birthDate, genre, password, isAdmin } = req.body;

    

      if (!firstName || !lastName || !cpf || !email || !telephone || !birthDate || !genre || !password || !isAdmin ) {
        

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
            password,
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