new Vue({
	el: '#app',
	data: {
		user: 100,
		monster: 100,
		show: false,
		turns: [],
		userTurn: true
	},
	watch: {
		user: function(value) {
			if(this.user <= 0) {
				if(confirm("You lose ;( Play Again?")) {
					this.user = 100;
					this.monster = 100;
				}
				else {
					this.show = !this.show;
				}
			}
			else {
				console.log("Still alive");
			}
		},
		monster: function(value) {
			if(this.monster <= 0) {
				if(confirm("You win!!! Play Again?...")) {
					this.user = 100;
					this.monster = 100;
				}
				else {
					this.show = !this.show;
				}
			}
			else {
				console.log("The monster lives on...");
			}
		}
	},
	methods: {
		startGame: function() {
			this.user = 100;
			this.monster = 100;
			this.show = !this.show;
		},
		userAttack: function() {
			var attack = Math.floor(Math.random() * 10) + 1;
			this.monster -= attack;
			this.turns.unshift({
				message: "Player hits monster for " + attack,
				class: "player-turn"
			});
			var damage = this.monsterAttack();
			this.user -= damage;
			this.turns.unshift({
				message: "Monster hits player for " + damage,
				class: "monster-turn"
			});
		},
		specialAttack: function() {
			var specialAttack = (Math.floor(Math.random() * 10 + 1)) * Math.floor(Math.random() * 5);
			this.monster -= specialAttack;
			console.log("monster: " + this.monster + "hp");
			var damage = this.monsterAttack();
			this.user -= damage;
			console.log("user: " + this.user + "hp");
		},
		heal: function() {
			var heal = Math.floor(Math.random() * 10) + 1;
			this.user += heal;
			console.log("heal = " + heal);
			var damage = this.monsterAttack();
			this.user -= damage;
			console.log("user: " + this.user + "hp");
		},
		monsterAttack: function() {
			return Math.floor(Math.random() * 10) + 1;
		}
	}
})