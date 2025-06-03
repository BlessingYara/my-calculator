let display = document.getElementById("display");


function toDisplay(input) {
    display.value += input;
}

function toCalculate() {
   display.value = eval(display.value);
   if (display.value === "undefined" || display.value === "" || display.value === "Null" || display.value === "NaN") {
       display.value = "Error";
       return;
   }
}

function toClear() {
    display.value = "";
}