const almoadillaBtn = document.getElementById("displayBox")
const box = document.getElementById("box")

const tresBarras = document.getElementById("tres-barras")
const equix = document.getElementById("equix")

almoadillaBtn.addEventListener("click", function(){
    box.classList.toggle("active")

    tresBarras.classList.add("close")
    equix.classList.remove("close")

   if(!box.matches(".active")){
    document.querySelectorAll(".active").forEach(x => x.classList.remove("active"))
    tresBarras.classList.remove("close")
    equix.classList.add("close")
   }
})

document.addEventListener("click", function(e){
    const isDropdownButton = e.target.matches("[data-button]")
   
    if(isDropdownButton) {
        const hermano = e.target.nextElementSibling
        if(hermano.matches("[data-dropList]")) {
            hermano.classList.toggle("active")
        }
    }
    if(e.target.closest("#box") || e.target.closest("#displayBox")) return
    tresBarras.classList.remove("close")
    equix.classList.add("close")
    document.querySelectorAll(".active").forEach(x => x.classList.remove("active"))
   
})


