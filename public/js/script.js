// Constants
const options = document.getElementById("options");
const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");
const line = document.getElementById("line");
const btnKeyboard = document.getElementById("buttonKeyboard");
const btnCombo = document.getElementById("buttonCombo");
const Keyboard = document.getElementById("Keyboard");
const combo = document.getElementById("combo");

arrowUp.addEventListener("click", toogleUp);
arrowDown.addEventListener("click", toogleDown);
btnKeyboard.addEventListener("click", f_Keyboard);
btnCombo.addEventListener("click", f_combo);

// Function Toogle
function toogleUp(){
  options.classList.replace("ocultar", "mostrar");
  arrowUp.classList.replace("mostrar", "ocultar");
  arrowDown.classList.replace("ocultar", "mostrar");
  
  if (btnKeyboard.classList.contains('ocultar')) {
      line.classList.remove("mostrar");
      line.classList.add("ocultar");
  }
  
  btnKeyboard.disabled = false;
  btnCombo.disabled = false;
}
function toogleDown() {
  options.classList.replace("mostrar", "ocultar");
  arrowUp.classList.replace("ocultar", "mostrar");
  arrowDown.classList.replace("mostrar", "ocultar");
  line.classList.remove("ocultar");
  btnKeyboard.disabled = true;
  btnCombo[i].disabled = true;
}

//Function Keyboard

function f_Keyboard(){
  Keyboard.classList.remove("ocultar");
  combo.classList.add("ocultar");
  btnKeyboard.classList.remove("mostrar");
  btnKeyboard.classList.add("ocultar");
  btnCombo.classList.remove("ocultar");
  btnCombo.classList.add("mostrar_null");
  line.classList.add("ocultar");
}

// Function Combo

function f_combo(){
  Keyboard.classList.add("ocultar");
  Keyboard.classList.remove("mostrar");
  combo.classList.remove("ocultar");
  combo.classList.add("mostrar");
  btnCombo.classList.remove("mostrar_null");
  btnCombo.classList.add("ocultar");
  btnKeyboard.classList.remove("ocultar");
  btnKeyboard.classList.add("mostrar_null");
  line.classList.remove("ocultar");
}