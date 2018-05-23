c = new Calculator()

buttons = document.getElementsByClassName('button-calcul-nb')
for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function () {
	    c.add_item_to_calculs(this.textContent)
	})
}

buttons = document.getElementsByClassName('button-calcul-ope')
for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function () {
	    c.add_item_to_calculs(this.textContent)
	})
}

document.getElementById('button-calcul-result').addEventListener('click', function () { c.execute() })

document.getElementById('button-calcul-clear').addEventListener('click', function () { c.clear() })
