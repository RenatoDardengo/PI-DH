const guestMiddleware = (req, res,next)=>{
  const isAuthentication = req.session.name;

  if(!isAuthentication){
    res.redirect("/admin");
   
  }else{
   
    next();

  }


}

module.exports=guestMiddleware