const inputFile = document.querySelector("#picture-input");
const pictureImage = document.querySelector(".picture-image");
const pictureImageTxt = "Selecione uma imagem (299px 197px)";
  pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture-img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

function showModal(title,id, genre, mark, style, number, description, costValue, saleValue, quantity){
    var id_deletar=id; 
  document.getElementById('title-modal').text=title;  
  document.getElementById('input-id-modal').value=id;
  document.getElementById('input-genre-modal').value=genre;
  document.getElementById('input-mark-modal').value=mark;
  document.getElementById('input-style-modal').value=style;
  document.getElementById('input-number-modal').value=number;
  document.getElementById('input-description-modal').value=description;
  document.getElementById('input-costValue-modal').value=costValue;
  document.getElementById('input-saleValue-modal').value=saleValue;
  document.getElementById('input-quantity-modal').value=quantity;
  document.getElementsByName("teste").value=title

  document.getElementById('id01').style.display='block'
 
}

  
