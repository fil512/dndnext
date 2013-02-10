var Dice = {
	
	randn: function(n) {
		return Math.floor(Math.random()*n+1);
	},
	
	roll6: function() {
		return this.randn(6);
	},
	
	roll: function() {
		var rolls = [this.roll6(), this.roll6(), this.roll6(), this.roll6()]; 
		
		rolls.sort();
		return rolls[1]+rolls[2]+rolls[3];
	}
};
	