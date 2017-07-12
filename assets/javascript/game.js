$(document).ready(function(){

	crystals = ["../week-4-game/assets/images/diamond.png", "../week-4-game/assets/images/topaz.png", "../week-4-game/assets/images/sapphire.png", "../week-4-game/assets/images/ruby.png"]

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$("#win").text(wins);
	$("#loss").text(losses);

	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4) {
				var randomNumber = Math.ceil(Math.random()*12)
				var found = false;
				for (var i=0; i < numbers.length; i++) {
					if (numbers[i] == randomNumber) {
						found = true; break
					}
				}
				if(!found)numbers[numbers.length]=randomNumber;
			}
		console.log(numbers);

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $("<img>");
			imageCrystal.attr("data-num", numbers[i]);
			imageCrystal.attr("src", crystals[i]);
			imageCrystal.attr("alt", "crystals")
			imageCrystal.addClass("crystalImage");
			$("#crystals").append(imageCrystal);
		}
	}

	function newGame () {

		counter = 0;
		$("#yourScore").text(counter);

		function randomIntFromInterval(min,max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		var numberToGuess = randomIntFromInterval(21,99);

		$(".value").text(numberToGuess);

		$(".crystalImage").on("click", function(){
			counter = counter + parseInt($(this).data("num"));

			$("#yourScore").text(counter);

			if (counter == numberToGuess){
				$("#status").text("You Won!");
				wins ++;
				$("#win").text(wins);
				console.log(wins)
				$("#crystals").empty();
				newCrystals();
				newGame();

			}

			else if (counter > numberToGuess){
				$("#status").text("You Lost!");
				losses ++;
				$("#loss").text(losses);
				console.log(losses)
				$("#crystals").empty();
				newCrystals();
				newGame();

			}
		});

	}

});


