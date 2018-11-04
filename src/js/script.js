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
function toogleUp() {
  options.classList.replace("hide", "show");
  arrowUp.classList.replace("show", "hide");
  arrowDown.classList.replace("hide", "show");

  if (btnKeyboard.classList.contains('hide')) {
    line.classList.remove("show");
    line.classList.add("hide");
  }

  btnKeyboard.disabled = false;
  btnCombo.disabled = false;
}
function toogleDown() {
  options.classList.replace("show", "hide");
  arrowUp.classList.replace("hide", "show");
  arrowDown.classList.replace("show", "hide");
  line.classList.remove("hide");
  btnKeyboard.disabled = true;
  btnCombo[i].disabled = true;
}

//Function Keyboard

function f_Keyboard() {
  Keyboard.classList.remove("hide");
  combo.classList.add("hide");
  btnKeyboard.classList.remove("show");
  btnKeyboard.classList.add("hide");
  btnCombo.classList.remove("hide");
  btnCombo.classList.add("show_null");
  line.classList.add("hide");
}

// Function Combo

function f_combo() {
  Keyboard.classList.add("hide");
  Keyboard.classList.remove("show");
  combo.classList.remove("hide");
  combo.classList.add("show");
  btnCombo.classList.remove("show_null");
  btnCombo.classList.add("hide");
  btnKeyboard.classList.remove("hide");
  btnKeyboard.classList.add("show_null");
  line.classList.remove("hide");
}