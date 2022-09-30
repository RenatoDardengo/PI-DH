const inputFile = document.querySelector("#picture-input");
const pictureImage = document.querySelector(".picture-image");
const pictureImageTxt = "Selecione uma imagem";
pictureImage.innerHTML = pictureImageTxt;



inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  console.log(e.target);
  const file = inputTarget.files[0];
  console.log(file)

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;
      console.log(readerTarget)
      const img = document.createElement("img");
      img.src = readerTarget.result;
      console.log(img.src)
      img.classList.add("picture-img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

function showModal(id, genre, mark, number, description,  costValue, saleValue, quantity, img){
  const frm = document.getElementById ("frmDelete")
  document.getElementById('idModal').value= id;
  document.getElementById('genreModal').value= genre;
  document.getElementById('markModal').value= mark;
  document.getElementById('numberModal').value= number;
  document.getElementById('modelModal').value= description;
  document.getElementById('costModal').value= costValue;
  document.getElementById('saleModal').value= saleValue;
  document.getElementById('quantityModal').value= quantity;
 


frm.action = "/administrator/product/delete/"+id+"?_method=delete";
 
  document.getElementById('id01').style.display='block'
 
}

  
