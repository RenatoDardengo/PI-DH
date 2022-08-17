const authUserRote = {
  login: (req, res) =>{
    return res.render ("userLogin", {title:"Login"})
  },

  create:(req, res)=>{
    return res.render ("usercreate")
  }

}

module.exports = authUserRote;