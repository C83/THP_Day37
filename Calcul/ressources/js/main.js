const calculator = require('./calculator.js')

c = calculator.New
console.log (c.add(2,4))
buttons = document.getElementsByClassName('btn')

buttons = addEventListener('click', function () {
    window.alert('Vous avez cliqué sur le lien') 
})