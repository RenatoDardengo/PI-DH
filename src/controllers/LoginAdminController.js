const loginAdminController={
  index: (req, res)=>{
      return res.render ("AdminLogin", {title:"Login Administrador"})
  }
}

module.exports = loginAdminController;