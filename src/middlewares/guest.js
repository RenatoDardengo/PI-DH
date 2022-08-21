const guestMiddleware = (req, res,next)=>{
  const isAuthentication = req.session.isAdmin;

  if(isAuthentication!=1){
    res.redirect("/admin");
   
  }else{
   
    next();

  }


}

module.exports=guestMiddleware