
var randomNumber = Math.floor((Math.random()*100)+1);
 console.log(randomNumber);

$(document).ready(function(){

	$("#guessbutton").click(function() {
		var guessVal = $("#textbar").val(); 
		console.log(guessVal);
	});

var guess = prompt("Pick a number between 1 and 100", "...");
 
while(true) {
	if (guess > randomNumber) {
		$("#meter").css("background-color", "green");
		$("#textchange").text("Too High!");
		guess = prompt("Pick a number between 1 and 100", "...");
}


	else if (guess < randomNumber) {
		$("#meter").css("background-color", "red");
		$("#textchange").text("Too Low!");
		guess = prompt("Pick a number between 1 and 100", "...");
}

	else {
		$("#meter").css("background-color", "purple");
		$("#textchange").text("You Win!!!");
		$(".container").css("background-color", "yellow");
		$(".panel").css("background-color", "red");
		$(".panel").text("Well played, Sir!");
		$(".panel").css("height", "50px", "width", "200px");
		break; 
	}
	}
	});



