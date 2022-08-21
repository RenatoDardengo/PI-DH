// const authenticationMiddleware = (req, res,next)=>{
//   const isAuthentication = req.sesssion.name;

//   if(isAuthentication){
//     next();
//   }else{
//     req.session.destroy();
//     res.clearCookie("user");
//     res.clearCookie("permission");
//     res.redirect("/admin");

//   }


// }

// module.exports=authenticationMiddleware