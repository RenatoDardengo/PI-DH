const { format } = require("sequelize/types/utils")

function IncrementValue(idInput, idSpan, valueProduct){
    var selectedInput = document.getElementById(idInput)
    var inputValue= parseInt(selectedInput.value)
    var newValue = inputValue+1

    selectedInput.value = newValue
    AlterQuantity(idInput, idSpan, valueProduct)
}

function DecrementValue(idInput, idSpan, valueProduct, article){
    var selectedInput = document.getElementById(idInput)
    var inputValue= parseInt(selectedInput.value)
    
    var newValue = inputValue-1

    selectedInput.value = newValue
    AlterQuantity(idInput, idSpan, valueProduct,article)
}

function AlterQuantity(idInput, idSpan, valueProduct,article){
    var valueReturn=0;
    var valuep =parseFloat (valueProduct)
    var selectedInput = document.getElementById(idInput)
    var selectedSpan = document.getElementById(idSpan)
    var inputValue= parseInt(selectedInput.value)
    
    var articleSelected = document.getElementById(article)
    if(inputValue <=0){
        articleSelected.parentNode.removeChild(articleSelected)
        alert("Produto será removido do carrinho!")
    }else{
        valueReturn =parseFloat (inputValue * valuep).toFixed(2)
        selectedSpan.innerText="R$ "+ new Intl.NumberFormat().format(valueReturn) 
    }
    
}
function RemoveItem(article){
    var articleSelected = document.getElementById(article)
    articleSelected.parentNode.removeChild(articleSelected)
    alert("Produto será removido do carrinho!")
}

function MostrarCookie(){
    var teste = document.cookie.valueOf("idProd").split(",")
    const encoded = encodeURIComponent(teste);
    console.log(decodeURIComponent(encoded));
    //console.log(teste)
}

