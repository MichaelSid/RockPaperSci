
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
     this.gamewinner = this.player1
     this.gameloser = this.player2
  } else {
  	 this.gamewinner = this.player2
     this.gameloser = this.player1
  }
}
// other option but more long-winded:
// if(this.Pairs[this.player1.pick][0] || this.Pairs[this.player1.pick][1] === this.player2.pick {

Game.prototype.weaponMessage = {
  rock:     { scissors: 'crushes', lizard: 'squashes' },
  paper:    { rock: 'covers', Spock: 'disproves' },
  scissors: { paper: 'cuts', lizard: 'decapitates' },
  lizard:   { Spock: 'poisons', paper: 'eats' },
  Spock:    { rock: 'vaporises', scissors: 'smashes' }
}


Game.prototype.winningMessage = function() {
  var message;
  if(this.winner() === null) {
    message = "It's a draw!"
  } else {
    message = this.gamewinner.name + "'s " + this.gamewinner.pick + ' ' + this.weaponMessage[this.gamewinner.pick][this.gameloser.pick] + ' ' + this.gameloser.name + "'s " + this.gameloser.pick 
  }
  return message
}


