/*Eventos Default: Son comportamientos con los que ya 
vienen algunos nodos en determinados eventos*/

let a =document.querySelector("a")
a.addEventListener("click", clickdea)
function clickdea (e){
    //Event.preventDefault(): Detiene el comportamiento
    //por default de cualquier nodo
    e.preventDefault()
    console.log("click de a!")
}