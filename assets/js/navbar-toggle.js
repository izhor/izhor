function changeIcons(){
    var toggleBtn = document.getElementById("togglebtn");
    if (document.getElementById("togglebtn").className == "fas fa-bars") {
        toggleBtn.classList.remove("fa-bars");
        toggleBtn.classList.add("fa-times");

    }else{
        toggleBtn.classList.remove("fa-times");
        toggleBtn.classList.add("fa-bars");
    }
}