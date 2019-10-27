function my_Function() {
    var res = "";
    res = res + isNaN(33) + ": 33<br>"
    res = res + isNaN("car") + ": car<br>"

    document.getElementById("Test").innerHTML = 0/0 + res;
}

function infinity_test() {  
    document.getElementById("inf").innerHTML = -3E533 + "<br>" +  4E308;
}

function boolean_test() {
    var x = 6
    var y = 1
    document.getElementById("boolean").innerHTML = (x > 54) + "<br>" + (y >= 1);
}

console.log(3 + 9);
console.log(88 > 0);

document.write("66" + 6);
document.write(7 == 7);
document.write(7 == 0);

document.write("5" === "5");
document.write("Bob" === 5);
document.write("6" === 6);
document.write("6" === "9");

document.write(6 > 1 && 88 > 7);
document.write(6 > 11 && 88 > 700);
document.write(6 > 11 || 88 > 15);
document.write(6 > 11 || 88 < 15);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}
function fnot_Function() {
    document.getElementById("fNot").innerHTML = !(20 > 10);
}