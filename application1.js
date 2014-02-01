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

    if (guessVal < randomNumber) {
        if (guessVal > previousGuess) {
            console.log("Warmer")
            $("#guide").css("background-color", "orange");
            $("#guidechange").text("Warmer");
 
        }
        else {
            console.log("Colder")
            $("#guide").css("background-color", "blue");
            $("#guidechange").text("Colder");
        }
    }
    else if (guessVal > randomNumber) {
        if (guessVal < previousGuess) {
            console.log("Warmer")
        } else {
            console.log("Colder")
        }
    }
    else {
        console.log("Correct Answer")
    }
}











