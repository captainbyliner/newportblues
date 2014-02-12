var randomNumber = Math.floor((Math.random()*100)+1);


 console.log(randomNumber);

 var guesses = [];

$(document).ready(function(){

$("#resetbutton").click(function() {
    location.reload();

    });
	
	 $("#hiddendiv").click(function(){
        location.reload();
    
});


    $("#guessbutton").click(function(){


    var guessVal = $("#textbar").val();

    checkGuess(guessVal);
    });

});

 $("#textbar").on('keypress', function(e) {
        if (e.which == 13) {
            e.preventDefault();
            var guessVal = $("#textbar").val();
            checkGuess(guessVal);
        }
    });

function checkGuess(guessVal) {

    var previousGuess;
    if (guesses.length > 0) {
        previousGuess = guesses[guesses.length - 1];
    }

if (isNaN(guessVal)) {
    alert("Pick A Number!");
    return false;
}

if (guessVal > 100) {
    alert("Please pick a number between 1 and 100");
    return false;
}

guesses.push(guessVal);


$("#guesses").text(guesses.join(','))

if (guessVal == randomNumber) {
        $("#hiddendiv").show();
        $("#meter").css("background-color", "green");
        $("#textchange").text("You Win!!!");
        $(".container").css("background-color", "yellow")  ;
        $("#title").text("Well played!!!");
        $("#title").css("color", "red");
        $("#resetbutton").hide();
        $("#textbar").hide();
        $("#guessbutton").hide();
        $("#hiddendivtext").text("It took you " + guesses.length + " attempts");
        $("#guesses").css("background-color", "green");
}

else if (guessVal < randomNumber) {

        $("#meter").css("background-color", "red");
        $("#textchange").text("Too Low!");
        $('#textbar').val('');


}
else {
        $("#meter").css("background-color", "green");
        $("#textchange").text("Too High!");
        $('#textbar').val('');


    }

var difference = Math.abs(randomNumber - guessVal);
console.log(difference);

var BURNING = 5;
var HOT = 10;
var WARM = 20;
var COOL = 30;
var COLD = 40;
var ICEBABY = 50;

if (difference == 0) {
    $("#guide").css("background-color", "purple");
    $("#guidechange").text("Boom!")
}

else if (difference <= BURNING) {
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





















