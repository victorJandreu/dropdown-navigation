const almoadillaBtn = document.getElementById("displayBox")
const box = document.getElementById("box")
const background = document.getElementById("background")


const tresBarras = document.getElementById("tres-barras")
const equix = document.getElementById("equix")

if(box.matches(".active")){
    background.classList.remove("close")
} else {
    background.classList.add("close")
}

almoadillaBtn.addEventListener("click", function(){
    box.classList.toggle("active")

    tresBarras.classList.add("close")
    equix.classList.remove("close")

   if(!box.matches(".active")){
    document.querySelectorAll(".active").forEach(x => x.classList.remove("active"))
    tresBarras.classList.remove("close")
    equix.classList.add("close")
    document.querySelectorAll(".primero").forEach(x => x.classList.remove("closeArrow"))
    document.querySelectorAll(".segundo").forEach(x => x.classList.add("closeArrow"))
   }

   if(box.matches(".active")){
    background.classList.remove("close")
} else {
    background.classList.add("close")
}
})

document.addEventListener("click", function(e){
    const isDropdownButton = e.target.matches("[data-button]")
   
    if(isDropdownButton) {
        let nodoActualSpans = e.target.querySelectorAll("span")
       
        const hermano = e.target.nextElementSibling
        if(hermano.matches("[data-dropList]")) {
            hermano.classList.toggle("active")
            if(hermano.matches(".active")) {
                nodoActualSpans[0].classList.add("closeArrow")
                nodoActualSpans[1].classList.remove("closeArrow")
            } else{
                nodoActualSpans[1].classList.add("closeArrow")
                nodoActualSpans[0].classList.remove("closeArrow")
            }
        }
    }
    if(e.target.closest("#box") || e.target.closest("#displayBox")) return
    tresBarras.classList.remove("close")
    equix.classList.add("close")
    document.querySelectorAll(".active").forEach(x => x.classList.remove("active"))
    document.querySelectorAll(".primero").forEach(x => x.classList.remove("closeArrow"))
    document.querySelectorAll(".segundo").forEach(x => x.classList.add("closeArrow"))
    
    if(box.matches(".active")){
        background.classList.remove("close")
    } else {
        background.classList.add("close")
    }
})


