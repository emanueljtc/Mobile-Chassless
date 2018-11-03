// Function Toogle
function toogleUp(){
  var options = document.getElementsByClassName("options");
  var arrowUp = document.getElementsByClassName("fa-angle-double-up");
  var arrowDown = document.getElementsByClassName("fa-angle-double-down");

  for (var i= 0; i<options.length; i++){
    options[i].classList.remove("ocultar");
    options[i].classList.add("mostrar");
  }
  for (var i = 0; i < arrowUp.length; i++) {
    arrowUp[i].classList.remove("mostrar");
    arrowUp[i].classList.add("ocultar");
  }
  for (var i = 0; i < arrowDown.length; i++) {
    arrowDown[i].classList.remove("ocultar");
    arrowDown[i].classList.add("mostrar");
  }
}
function toogleDown() {
  var options = document.getElementsByClassName("options");
  var arrowUp = document.getElementsByClassName("fa-angle-double-up");
  var arrowDown = document.getElementsByClassName("fa-angle-double-down");

  for (var i = 0; i < options.length; i++) {
    options[i].classList.remove("mostrar");
    options[i].classList.add("ocultar");
  }
  for (var i = 0; i < arrowUp.length; i++) {
    arrowUp[i].classList.remove("ocultar");
    arrowUp[i].classList.add("mostrar");
  }
  for (var i = 0; i < arrowDown.length; i++) {
    arrowDown[i].classList.remove("mostrar");
    arrowDown[i].classList.add("ocultar");
  }
}

//Function Options