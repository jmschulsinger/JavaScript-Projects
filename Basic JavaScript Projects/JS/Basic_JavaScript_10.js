var Instsruments = ["Bass", "Violen", "Triangle", "Tuba", "Guitar", "Harmonica", "Keyboard"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instsruments.length; Y++) {
    Content += Instsruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function dog_pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sitting";
    Dog_Picture[1] = "laying";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + Dog_Picture[3] + ".";
}

function constant_function() {
    const beer = {type:"stout", brewery:"Praire", name:"Bomb!"}
    beer.name = "Dumble Dunk";
    beer.stouttype = "American Imperial Stout";
    document.getElementById("Constant").innerHTML = "The type of beer is a " + beer.type + " more specifically a(n) " + beer.stouttype;
}

var x = 22;
{
    let x = 11;
}
document.getElementById("let").innerHTML = x;

function return_Function() {
    return Math.PI;
}
document.getElementById("pi").innerHTML = return_Function();

let brew = {
    kind: "Stout ",
    label: "Superstition Coffee Stout ",
    place: "Arizoa Wildress ",
    location: "Gilber, AZ ",
    description : function() {
        return "The " + this.label + "is a " + this.kind + "from " + this.place + "from " + this.location
    }
}
document.getElementById("brew").innerHTML = brew.description();

var content = "";
var j;
for (j = 0; j < 100; j++) {
  if (j === 33) { break; }
  content += "The number is " + j + "<br>";
}
document.getElementById("break").innerHTML = content;

var info = "";
var z;
for (z = 0; z < 100; z++) {
  if (z === 22) { continue; }
  info += "The number is " + z + "<br>";
}
document.getElementById("continue").innerHTML = info;