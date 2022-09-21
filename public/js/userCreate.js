const firstName = document.getElementById ("firstName");
const lastName = document.getElementById ("lastName");
const formSignup = document.querySelector("form");
const cpf = document.getElementById ("cpf")
const telephone = document.getElementById("telephone")
const passConfim =document.getElementById("password-confirmation")
const pass = document.getElementById("password")
const erro = document.getElementById ("msg-erro")

passConfim.addEventListener("keyup", (e)=>{
  if(passConfim.value!=pass.value){
    erro.classList.remove ("invisible")
    erro.innerText="Senha não confere"
    // erro.innerHTML="<h6> não conferi </h6>"
    
  }else{
    erro.classList.add ("invisible")
    
  }
})

telephone.onkeypress = (e)=>{
  return ((e.charCode >= 48 && e.charCode <= 57) || (e.keyCode == 45 || e.charCode == 40 || e.charCode==41))
}
cpf.onkeypress = function (event){
  return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))

}

cpf.onkeyup = function (value) {
  var value = cpf.value;
  
    if(value.length==3){
      return cpf.value = value + ".";
   
     }else if(value.length==7){
     return cpf.value = value + ".";
   
   }else if(value.length==11){
     return cpf.value = value + "-"
   }
  }

  telephone.addEventListener("keyup", function (value) {
    var item = value
    var value = telephone.value;
    console.log(value)
    
      if(value.length==2){
        return telephone.value = "("+ value + ")";
     
       }else if(value.length==9){
       return telephone.value = value + "-";
       
     }else if(value.length==13){
       return telephone.value -item
     }
    });


  

function mostrarSenha(nameId) {
  var tipo = document.getElementById(nameId);

  if (tipo.type == "password") {
    tipo.type = "text";
    document.getElementById("img-"+nameId).src = "/img/hidden2.png"
  } else {
    tipo.type = "password";
    document.getElementById("img-"+nameId).src = "/img/view2.png"
  }
}