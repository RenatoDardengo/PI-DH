const authUserRote = {
  login: (req, res) =>{
    return res.render ("userLogin", {title:"Login"})
  }

}

module.exports = authUserRote;