// Function Toogle
function toogleUp(){
  var options = document.getElementsByClassName("options");
  var arrowUp = document.getElementsByClassName("fa-angle-double-up");
  var arrowDown = document.getElementsByClassName("fa-angle-double-down");
  var btnTeclado = document.getElementsByClassName("btn-teclado");
  var line = document.getElementsByClassName("line");

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
  for (var i = 0; i < line.length; i++) {
    line[i].classList.add("ocultar");
  }
  for (var i = 0; i < btnTeclado.length; i++) {
    btnTeclado[i].disabled = false;
  }
}
function toogleDown() {
  var options = document.getElementsByClassName("options");
  var arrowUp = document.getElementsByClassName("fa-angle-double-up");
  var arrowDown = document.getElementsByClassName("fa-angle-double-down");
  var line = document.getElementsByClassName("line");
  var btnTeclado = document.getElementsByClassName("btn-teclado");

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
  for (var i = 0; i < line.length; i++) {
    line[i].classList.remove("ocultar");
  }
  for (var i = 0; i < btnTeclado.length; i++) {
    btnTeclado[i].disabled = true;
  }
}

//Function teclado

function teclado(){
  var teclado = document.getElementsByClassName("teclado");
  var combo = document.getElementsByClassName("combo");
  var btnTeclado = document.getElementsByClassName("btn-teclado");
  var btnCombo = document.getElementsByClassName("btn-combo");
  var line = document.getElementsByClassName("line");

  for (var i = 0; i < teclado.length; i++) {
    teclado[i].classList.remove("ocultar");
  }
  for (var i = 0; i < combo.length; i++) {
    combo[i].classList.add("ocultar");
  }
  for (var i = 0; i < btnTeclado.length; i++) {
    btnTeclado[i].classList.remove("mostrar");
    btnTeclado[i].classList.add("ocultar");
  }
  for (var i = 0; i < btnCombo.length; i++) {
    btnCombo[i].classList.remove("ocultar");
    btnCombo[i].classList.add("mostrar_null");
  }
  for (var i = 0; i < line.length; i++) {
    line[i].classList.add("ocultar");
  }
}

// Function Combo

function combo(){
  var teclado = document.getElementsByClassName("teclado");
  var combo = document.getElementsByClassName("combo");
  var btnTeclado = document.getElementsByClassName("btn-teclado");
  var btnCombo = document.getElementsByClassName("btn-combo");
  var line = document.getElementsByClassName("line");

  for (var i = 0; i < teclado.length; i++) {
    teclado[i].classList.add("ocultar");
    teclado[i].classList.remove("mostrar");
  }
  for (var i = 0; i < combo.length; i++) {
    combo[i].classList.remove("ocultar");
    combo[i].classList.add("mostrar");
  }
  for (var i = 0; i < btnCombo.length; i++) {
    btnCombo[i].classList.remove("mostrar_null");
    btnCombo[i].classList.add("ocultar");


  }
  for (var i = 0; i < btnTeclado.length; i++) {
    btnTeclado[i].classList.remove("ocultar");
    btnTeclado[i].classList.add("mostrar_null");
  }
  for (var i = 0; i < line.length; i++) {
    line[i].classList.remove("ocultar");
  }
}