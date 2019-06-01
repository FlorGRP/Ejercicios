/*Eventos Default: Son comportamientos con los que ya 
vienen algunos nodos en determinados eventos*/

let body = document.querySelector("body")
let a =document.querySelector("a")
a.addEventListener("click", clickdea)
function clickdea (e){
    //Event.preventDefault(): Detiene el comportamiento
    //por default de cualquier nodo
     e.preventDefault()
    console.log("click de a!")

    let p = document.createElement("p")
    p.innerText =" ¿Esta seguro que quiere salir de esta pagina?"
    let div = document.createElement("div")
    //div.className = "popup"
    div.classList.add("popup")
    //Nodo.classList.add() Para no sobreescribir classname
    //Nodo.classList.remove()
    //Nodo.classList.toggle()

    let btn_acep = document.createElement("button")
    btn_acep.innerText = "Aceptar"
    //btn_acep.id ="aceptar"
    btn_acep.addEventListener("click",Aceptar)
    function Aceptar(){
        //location.href ="http//google.com"
        location.href = a.href 

    }

    let btn_canc =document.createElement("button")
    btn_canc.innerText ="Cancelar"
    //btn_canc.id="cancelar"
    btn_canc.addEventListener("click",Cancelar)
    function Cancelar(){
        body.removeChild(div)
    }

    body.appendChild(div)
    div.appendChild(p)
    div.appendChild(btn_acep)
    div.appendChild(btn_canc)
}


/*
1- En el callback del <a> hacer la siguiente estructura:
<div>
<p>¿Esta seguro que quiere salir de esta pagina?</p>
<button>Aceptar</button>
<button>Cancelar</button>
</div>

2-Si se hace click en "Aceptar" se tiene que redigir al 
usuario al href del <a>

3-Si se hace click en "Cancelar" se tiene que borrar todo 
div que contenia el boton
*/

