function addition() {
    var Addition = 3 + 5;
    document.getElementById("addition").innerHTML = "3 + 5 = " + Addition;
}

function subtraction() {
    var Subtraction = 7 + 4;
    document.getElementById("subtraction").innerHTML = "7 - 4 =" + Subtraction;
}

function multipication() {
    var simple_Math = 3 * 3;
    document.getElementById("multiplication").innerHTML = "3 * 3 = " + simple_Math;
}

function division() {
    var simple_Math = 55 / 5;
    document.getElementById("division").innerHTML = "55 / 5 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (2 + 4) * 5 / 8 -9;
    document.getElementById("Math").innerHTML = "2 plus 4, multiplied by 5, divided by 8 and then subtracted by 9 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 30 % 9;
    document.getElementById("remainder").innerHTML = "When you divide 30 by 9 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 5;
    document.getElementById("negation").innerHTML = -x;
}

function increment_Operator() {
    var i = 10;
    i++;
    var n = i;
    document.getElementById("increment").innerHTML = n;
}

function decrement_Operator() {
    var j = 23;
    j--;
    var p = j;
    document.getElementById("decrement").innerHTML = p;
}

function random_Number() {
    document.getElementById("rand").innerHTML = Math.random();
}

function absolute_Number() {
    document.getElementById("abs").innerHTML = Math.abs(-44);
}