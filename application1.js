var randomNumber = Math.floor((Math.random()*100)+1);
 
 console.log(randomNumber);

 var guesses = [];

$(document).ready(function(){

$("#resetbutton").click(function() {
    location.reload();


});


    $("#guessbutton").click(function(){


    var guessVal = $("#textbar").val();

    checkGuess(guessVal);
    });
});

function checkGuess(guessVal) {

    var previousGuess;
    if (guesses.length > 0) {
        previousGuess = guesses[guesses.length - 1];
    }

guesses.push(guessVal);


$("#guesses").text(guesses.join(','))


if (guessVal == randomNumber) {
        $("#meter").css("background-color", "purple");
        $("#textchange").text("You Win!!!");
        $(".container").css("background-color", "yellow");
        $(".panel").css("background-color", "red");
        $(".panel").text("Well played, Sir!");
        $(".panel").css("height", "50px", "width", "200px");
}

else if (guessVal < randomNumber) {

        $("#meter").css("background-color", "red");
        $("#textchange").text("Too Low!");


}
else {
        $("#meter").css("background-color", "green");
        $("#textchange").text("Too High!");


    }

var difference = Math.abs(randomNumber - guessVal);
console.log(difference);

var BURNING = 5;
var HOT = 10;
var WARM = 20;
var COOL = 30;
var COLD = 40;
var ICEBABY = 50

if (difference <= BURNING) {
    $("#guide").css("background-color", "red");
    $("#guidechange").text("Burning!");
}

else if (difference <= HOT) {
    $("#guide").css("background-color", "#ff3333");
    $("#guidechange").text("Hot");
}

else if (difference <=WARM) {
    $("#guide").css("background-color", "#ff6666");
    $("#guidechange").text("Warm");
}

else if (difference <= COOL) {
    $("#guide").css("background-color", "#66C2E0");
    $("#guidechange").text("Cool");
}

else if (difference <= COLD) {
    $("#guide").css("background-color", "#0066CC");
    $("#guidechange").text("Cold");
}

else if (difference === 0) {
    $("#guide").css("background-color", "purple");
    $("#guidechange").text("Got It!!!");
}
else {
    $("#guide").css("background-color", "blue");
    $("#guidechange").text("Ice Baby");
}
}



















