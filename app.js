const slider = document.getElementById("slider")
const martini = document.getElementById("martini")
martini.style.backgroundPosition = "0 "+"-"+slider.value +"px"
slider.oninput = function() {
    martini.style.backgroundPosition = "0 "+"-"+slider.value +"px"
}