
Game.prototype.Pairs = {
rock: ["scissors", "lizard"],
scissors: ["paper", "lizard"],
paper: ["rock", "Spock"],
lizard: ["Spock","paper"],
Spock: ["scissors", "rock"]
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

Game.prototype.samePick = function() {
	return this.player1.pick === this.player2.pick;
}

Game.prototype.winner = function() {
	if(this.samePick()) return null
	if(this.Pairs[this.player1.pick].indexOf(this.player2.pick) !== -1) {
  	return this.player1;
  } else {
  	return this.player2;
  }
}

// other option but more long-winded:
// if(this.Pairs[this.player1.pick][0] || this.Pairs[this.player1.pick][1] === this.player2.pick {

