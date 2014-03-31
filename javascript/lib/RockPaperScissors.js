
var Pairs = {
rock: "scissors",
scissors: "paper",
paper: "rock"
}




function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

// function samePick() {
// 	this.player1.picks === this.player2.picks;
// }

Game.prototype.winner = function() {
	if(this.player1.pick === this.player2.pick) {
		return null;
  } else if(Pairs[this.player1.pick] === this.player2.pick) {
  	return this.player1;
  } else {
  	return this.player2;
  }
}

