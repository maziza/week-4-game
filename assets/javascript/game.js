$(document).ready(function() {
	var characters = new Array(4);
	characters[0] = new character ('chewbacca', 'chewbacca.tif', 140, 20, 30);
	characters[1] = new character ('jarjarbinks', 'jarjarbinks.tif', 100, 18, 31);
	characters[2] = new character ('c3po', 'c3po.tif', 120, 15, 28);
	characters[3] = new character ('jabbathehutt', 'jabbathehutt.tif', 135, 19, 33);

	var attackpoints = [140, 100, 120, 135];



function	character (name, image, health, attack, counter) {
		this.name = name;
		this.image = image;
		this.health = health;
		this.attack = attack;
		this.counter = counter;
		this.status = 'available';
	}

//functions for game

	function fighterslist() {

	}


	function fight() {

	}

	function Enemies defeated() {

	}

	function gameOver() {
		
	}
	function playerWins() {
		

});