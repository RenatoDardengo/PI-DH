const firstName = document.getElementById ("firstName");
const lastName = document.getElementById ("lastName");
const formSignup = document.querySelector("form");
const cpf = document.getElementById ("cpf")




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
