
function printMathOutput() {
    
    var output = "";
    output += "Value of π (pi): " + Math.PI + "<br>";
    output += "Value of e: " + Math.E + "<br>";
    output += "Square root of 25: " + Math.sqrt(25) + "<br>";
   
    output += "Random decimal between 0 and 1: " + Math.random();
    document.getElementById("math").innerHTML = output;
}
window.onload = printMathOutput;
