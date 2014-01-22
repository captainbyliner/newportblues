var randomNumber = Math.floor((Math.random()*100)+1);
 
 console.log(randomNumber);

 var guesses = [];

$(document).ready(function(){
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
}







