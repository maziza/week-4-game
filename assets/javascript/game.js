var wins=0;
var losses=0;

// variables
var crystalValue1= Math.floor((Math.random() * 20) + 1); 
var	crystalValue2= Math.floor((Math.random() * 20) + 1);
var	crystalValue3= Math.floor((Math.random() * 20) + 1);
var	crystalValue4= Math.floor((Math.random() * 20) + 1);


// scoreboard variables
var playerScore = 0;
var Score = 0;

// start game

startGame();

function startGame () {
 	Score= Math.floor((Math.random() * 100) + 1);
	crystalValue1= Math.floor((Math.random() * 20) + 1); 
	crystalValue3= Math.floor((Math.random() * 20) + 1);
	crystalValue4= Math.floor((Math.random() * 20) + 1);

	document.getElementById("Score").innerHTML;
	document.getElementById("playerScore").innerHTML;


}; 

function checkGame() {
	if (playerScore==Score){
		wins++;
		document.getElementById("wins").innerHTML = wins;
		startGame();
	}else if(playerScore>Score){
		losses++
		document.getElementById("losses").innerHTML = losses;
		startGame();
	}
}; 





//click functions
$('#crystalorange').click(function(){
	document.writer(crystalValue1);
	playerScore=playerScore+crystalValue1;
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();
	
});
$('#crystalgreen').click(function(){
document.writer(crystalValue2);
	playerScore=playerScore+crystalValue2;
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();


});
$('#crystalred').click(function(){
	document.writer(crystalValue3);
	playerScore=playerScore+crystalValue3;
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();

		
});
$('#crystalblue').click(function(){
	document.writer(crystalValue4);
	playerScore=playerScore+crystalValue4;
	document.getElementById("playerScore").innerHTML = playerScore;
	checkGame();
});


