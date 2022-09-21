function mostrarSenha(nameId) {
  var tipo = document.getElementById("password");
  var img = document.getElementById("img-password")

  if (tipo.type == "password") {
    tipo.type = "text";
    img.src = "/img/hidden2.png"
  } else {
    tipo.type = "password";
    img.src = "/img/view2.png"
  }
}
