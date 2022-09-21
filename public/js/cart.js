window.onload(
    UpdateValue()
)
function IncrementValue(idInput, idSpan, valueProduct,idProd){
    var selectedInput = document.getElementById(idInput)
    var inputValue= parseInt(selectedInput.value)
    var newValue = inputValue+1
    selectedInput.value = newValue
        
    AlterQuantity(idInput, idSpan, valueProduct,idProd)
}


function DecrementValue(idInput, idSpan, valueProduct, idProd){
    var selectedInput = document.getElementById(idInput)
    var inputValue= parseInt(selectedInput.value)
    var newValue = inputValue-1
    if(newValue <=0){
        newValue=1
    }
    selectedInput.value = newValue
    AlterQuantity(idInput, idSpan, valueProduct,idProd)
}

function AlterQuantity(idInput, idSpan, valueProduct,idProd){
    var valueTotal =0;
    var valueProduct =parseFloat (valueProduct);
    var selectedInput = document.getElementById(idInput);
    var selectedSpan = document.getElementById(idSpan);
    var inputValue= parseInt(selectedInput.value);
   

    valueTotal =inputValue * valueProduct
    selectedSpan.innerText= valueTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
       
    UpdateCookie(idProd, inputValue, valueTotal)
    
}
function RemoveItem(article, idProd){
    var principal = document.getElementById("section-principal")
    var erro = document.getElementById("span-error")
    var articleSelected = document.getElementById(article)
    
    var spanValue = document.getElementsByClassName("product-list")
    var carCookies =decodeURIComponent(document.cookie.split("idProd=")[1])
    var carCookies = JSON.parse (carCookies.replace("j:",""))
    var newCookie= []
    for (let e of carCookies){
        if(e.id!=idProd){
            newCookie.push (e)
        } 

    }
    document.cookie='idProd=j:'+JSON.stringify(newCookie)+'; path=/'
    articleSelected.parentNode.removeChild(articleSelected)

    if(spanValue.length==0){
        principal.parentNode.removeChild(principal)
        erro.classList.remove ("error")

    }else{
        UpdateValue()
    }
   
   
    
    
}

function UpdateCookie(idProd, inputValue, valueTotal){
    var carCookies =decodeURIComponent(document.cookie.split("idProd=")[1])
    var carCookies = JSON.parse (carCookies.replace("j:",""))
    
   var newCookie= []
    for (let e of carCookies){
        if(e.id==parseInt (idProd)){
            e.qtde=inputValue
            e.value=parseFloat(valueTotal).toFixed(2)
            newCookie.push (e)
        } else{

            newCookie.push (e)
        }

    }
   
    document.cookie='idProd=j:'+JSON.stringify(newCookie)+'; path=/'
    UpdateValue()
    
}
function UpdateValue(){
    var spanValueTotal = document.getElementById("span-value-total-products")
    var spanValueCar = document.getElementById("span-value-total-products-car")
    var lblQtde = document.getElementById("lbl-qtde-products")
    var carCookies =decodeURIComponent(document.cookie.split("idProd=")[1])
    var carCookies = JSON.parse (carCookies.replace("j:",""))
    var sum=0;
    var qtde=0;

    for (let i = 0; i < carCookies.length; i++) {
    sum +=parseFloat(carCookies[i].value);
    }

    for (let i = 0; i < carCookies.length; i++) {
        qtde +=parseInt (carCookies[i].qtde);
    }

    if(qtde==1){
        lblQtde.innerText = qtde + " produto"

    }else{
        lblQtde.innerText = qtde + " produtos"
    }

    spanValueTotal.innerText=sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    spanValueCar.innerText=sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    
}

