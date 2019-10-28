function full_Sentence() {
    var part_1 = "I was born ";
    var part_2 = "in the great state ";
    var part_3 = "of Nevada ";
    var part_4 = "in the city of Las Vegas.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy"
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Function() {
    var string = "whats up!";
    var new_Sentance = string.toUpperCase();
    document.getElementById("Upper").innerHTML = new_Sentance;
}

function search_Function() {
    var string_2 = "whats up!";
    var n = string_2.search("up!");
    document.getElementById("Search").innerHTML = n;
}

function string_Method() {
    var x =182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var x = 14347329.3213432423442;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function fixed_Function() {
    var num = 3.1458348;
    var y = num.toFixed(3);
    document.getElementById("Fixed").innerHTML = y;
}

function value_Function() {
    var string_3 = "Howdy Partner!";
    var output = string_3.valueOf();
    document.getElementById("Value").innerHTML = output;
  }