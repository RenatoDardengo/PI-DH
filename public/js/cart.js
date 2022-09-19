const { format } = require("sequelize/types/utils")

function IncrementValue(idInput, idSpan, valueProduct,idProd){
    var selectedInput = document.getElementById(idInput)
    var inputValue= parseInt(selectedInput.value)
    var newValue = inputValue+1
    selectedInput.value = newValue
        
    AlterQuantity(idInput, idSpan, valueProduct,"",idProd)
}


function DecrementValue(idInput, idSpan, valueProduct, article,idProd){
    var selectedInput = document.getElementById(idInput)
    var inputValue= parseInt(selectedInput.value)
    var newValue = inputValue-1
    selectedInput.value = newValue

    AlterQuantity(idInput, idSpan, valueProduct,article,idProd)
}

function AlterQuantity(idInput, idSpan, valueProduct,article,idProd){
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
        valueReturn =inputValue * valuep
        selectedSpan.innerText= valueReturn.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
    MostrarCookie(idInput,idProd)
    
}
function RemoveItem(article, idProd){
    var articleSelected = document.getElementById(article)
    articleSelected.parentNode.removeChild(articleSelected)
    var carCookies =decodeURIComponent(document.cookie.split("idProd=")[1])
    var carCookies = JSON.parse (carCookies.replace("j:",""))
    var newCookie= []
    for (let e of carCookies){
        if(e.id!=idProd){
            newCookie.push (e)
        } 

    }
    console.log(idProd)
   
    document.cookie='idProd=j:'+JSON.stringify(newCookie)+'; path=/'
    
    
}

function MostrarCookie(idInput,idProd){
    var selectedInput = document.getElementById(idInput)
    var carCookies =decodeURIComponent(document.cookie.split("idProd=")[1])
    var carCookies = JSON.parse (carCookies.replace("j:",""))
    var inputValue= parseInt(selectedInput.value)
    
   var newCookie= []
    for (let e of carCookies){
        if(e.id==parseInt (idProd)){
            e.qtde=inputValue
            newCookie.push (e)
        } else{

            newCookie.push (e)
        }

    }
   
    document.cookie='idProd=j:'+JSON.stringify(newCookie)+'; path=/'
    

    console.log(idProd)
    console.log(newCookie)
}

