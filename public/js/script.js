let options = document.getElementById("options");
let arrowUp = document.getElementById("arrowUp");
let arrowDown = document.getElementById("arrowDown");
let line = document.getElementById("line");
let btnTeclado = document.getElementById("buttonTeclado");
let btnCombo = document.getElementById("buttonCombo");
let teclado = document.getElementById("teclado");
let combo = document.getElementById("combo");


// Function Toogle
function toogleUp(){
  options.classList.replace("ocultar", "mostrar");
  arrowUp.classList.replace("mostrar", "ocultar");
  arrowDown.classList.replace("ocultar", "mostrar");
  
  if (btnTeclado.classList.contains('ocultar')) {
      line.classList.remove("mostrar");
      line.classList.add("ocultar");
  }
  
  btnTeclado.disabled = false;
  btnCombo.disabled = false;
}
function toogleDown() {
  options.classList.replace("mostrar", "ocultar");
  arrowUp.classList.replace("ocultar", "mostrar");
  arrowDown.classList.replace("mostrar", "ocultar");
  line.classList.remove("ocultar");
  btnTeclado.disabled = true;
  btnCombo[i].disabled = true;
}

//Function teclado

function f_teclado(){
  teclado.classList.remove("ocultar");
  combo.classList.add("ocultar");
  btnTeclado.classList.remove("mostrar");
  btnTeclado.classList.add("ocultar");
  btnCombo.classList.remove("ocultar");
  btnCombo.classList.add("mostrar_null");
  line.classList.add("ocultar");
}

// Function Combo

function f_combo(){
  teclado.classList.add("ocultar");
  teclado.classList.remove("mostrar");
  combo.classList.remove("ocultar");
  combo.classList.add("mostrar");
  btnCombo.classList.remove("mostrar_null");
  btnCombo.classList.add("ocultar");
  btnTeclado.classList.remove("ocultar");
  btnTeclado.classList.add("mostrar_null");
  line.classList.remove("ocultar");
}