const guestMiddleware = (req, res,next)=>{
  const isAuthentication = req.cookies.name;

  if(!isAuthentication){
    res.redirect("/admin");
   
  }else{
   
    next();

  }


}

module.exports=guestMiddleware