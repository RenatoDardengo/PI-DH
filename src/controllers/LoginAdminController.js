const loginAdminController={
  index: (req, res)=>{
      return res.render ("Admin", {title:"Login Administrador"})
  }
}

module.exports = loginAdminController;