var petName = "Rocky"; 
    myFunction(); 

    function myFunction() { 
        document.getElementById("Pet1").innerHTML = 
            typeof petName + "- " + "My pet name is " + petName; 
    } 

    document.getElementById("Pet2").innerHTML = 
        typeof petName + "- " + "My pet name is " + petName; 
        
function newFunction() {
    var d = new Date();
    var n = d.getHours();
    document.getElementById("hour").innerHTML = n;
    }

function timeFunction() {
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 12) {
        greeting = "Good Morning!";
    } else {
        greeting = "Good Night!";
    }
    document.getElementById("if").innerHTML = greeting;
    }

function Time_function() {
    var Time = new Date().getHours();
    var Reply
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time <18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}