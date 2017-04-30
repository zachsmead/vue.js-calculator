document.addEventListener("DOMContentLoaded", function(event) {
	var app = new Vue({
		el: '#app',
		data: {
			numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			operators: ["+", "-", "*", "/"],
			expression: '0',
			answer: 0
		},
		methods: {
			enterSymbol: function(symbol) {
				// if the current input symbol is a number 
				if (Number.isInteger(symbol)) {
					if (this.expression == '0') {
						this.expression = String(symbol);
					} else {
						this.expression += String(symbol);
					}

				// if the current input symbol is an operator and the last input was not an operator
				} else if (this.operators.includes(symbol) 
						&& this.expression[this.expression.length - 1] != symbol 
						&& this.expression.length > 0) 
				{
					this.expression += symbol;
					console.log(this.expression);
				}
			},

			evaluate: function() {
				this.answer = eval(this.expression);
			}
		}
	});
});


