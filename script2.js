let boton = document.querySelector("button")
boton.addEventListener("click",hacerClick)
let body =document.querySelector("body")

function hacerClick{

    let div = document.createElement("div") 
    let p = document.createElement("p")
    p.innerText ="Lorem Ipsum"
    let bton = document.createElement("button")
    bton.innerText = "Borrar"

    bton.addEventListener("click",borrar)
    body.insertBefore(div,boton)
    div.appendChild(p)
    div.appendChild(bton)

    function borrar{
        div.removeChild(p)
    }

}

