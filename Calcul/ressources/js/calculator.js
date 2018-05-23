class Calculator {
	constructor(){
		this.calculs = new Array
		this.result = null
	}

	add_item_to_calculs(charact){
		this.calculs.push(String(charact))
		this.maj_line_calcul()
		this.maj_line_result(" ")
	}

	clear(){
		this.calculs=new Array
		this.result = null
		this.maj_line_calcul()
		this.maj_line_result()
	}

	add() {
		// Evite une erreur si les paramètres sont vides
		if (typeof Number(arguments[0]) === "number"){	
			// La première valeur est définie comme notre valeur initiale
		    var result = Number(arguments[0])
		    // On teste s'il y a d'autres valeurs
		    if (arguments.length > 1){
			    // On additionne les autres valeurs
			    for (var i = 1; i < arguments.length; i++) {
		    	    result += Number(arguments[i])
		    	}
		   	}
		    return Number(result);
		} else {
			// Message dans le cas où il n'y a pas de paramètre
			return null
		}
	}
	
	substract() {
		// Evite une erreur si les paramètres sont vides
		if (typeof Number(arguments[0]) === "number"){	
			// La première valeur est définie comme notre valeur initiale
		    var result = arguments[0]
		    // On teste s'il y a d'autres valeurs
		    if (arguments.length > 1){
			    // On additionne les autres valeurs
			    // S'il y en a plusieures, on les soustrait toutes à la valeur initiale
			    for (var i = 1; i < arguments.length; i++) {
		    	    result -= arguments[i]
		    	}
		   	}
		    return Number(result);
		} else {
			// Message dans le cas où il n'y a pas de paramètre
			return null
		}
	}

	divide() {
		// Evite une erreur si les paramètres sont vides
		if (typeof Number(arguments[0]) === "number"){	
			// La première valeur est définie comme notre valeur initiale
		    var result = arguments[0]
		    // On teste s'il y a d'autres valeurs
		    if (arguments.length > 1){
			    // On additionne les autres valeurs
			    // S'il y en a plusieures, on divise la valeur initiale autant de fois
			    for (var i = 1; i < arguments.length; i++) {
		    	    result /= arguments[i]
		    	}
		   	}
		    return Number(result);
		} else {
			// Message dans le cas où il n'y a pas de paramètre
			return null
		}
	}

	multiply() {
		// Evite une erreur si les paramètres sont vides
		if (typeof Number(arguments[0]) === "number"){	
			// La première valeur est définie comme notre valeur initiale
		    var result = arguments[0]
		    // On teste s'il y a d'autres valeurs
		    if (arguments.length > 1){
			    // On additionne les autres valeurs
			    // S'il y en a plusieures, on divise la valeur initiale autant de fois
			    for (var i = 1; i < arguments.length; i++) {
		    	    result *= arguments[i]
		    	}
		   	}
		    return Number(result);
		} else {
			// Message dans le cas où il n'y a pas de paramètre
			return null
		}
	}

	perform(ope,nb1,nb2) {
		switch (ope){
			case "-":
				return this.substract(nb1,nb2)
				break
			case "*":
				return this.multiply(nb1,nb2)
				break
			case "/":
				return this.divide(nb1,nb2)
				break
			default:
				return this.add(nb1,nb2)
		}
	}

	execute() {
		// Evite une erreur si les paramètres sont vides
		if (this.calculs[0]){	
			var line_of_calculs = this.calculs.join("")
			// RegExp qui correspond à 
			// 	- de 0 à n chiffres
			//  - de O à n autres caractères
			//  - d'un opérateur (le dernier qui apparait)
			//	- de 1 à n chiffres (les derniers)
			var reg_general = /([\d]*).*([+-\/*])([\d]+)$/g
			// On utilise les groupes. Avec /g et exec, on aura : 
			//    	- result[0] l'expression qui correspond
			//		- result[1] le premier groupe - le nb 1 - peut être vide, on utilise alors le précédent résultat
			//		- result[2] le second groupe - l'opérateur
			// Si le motif n'est pas trouvé, result === null

			var result = reg_general.exec(line_of_calculs)
			if (result != null){		// si on a bien trouvé le motif
				if (result[1] === ""){	// s'il y a pas de valeur pour le premier élément, on teste s'il y a un dernier résultat
						if (this.result != null){
							result[1] = this.result 	// on attribue la valeur de result au premier nombre
						} else {
							console.log("Error, no first number and no old result. Please clear")
							return null
						}
					}
			} else {
					// Message dans le cas où il n'y a pas de paramètre
					console.log("Error, arguments invalid. Please clear")
					return null
				}
		} else
			{
				console.log("Error, no calculs. Please enter")
				return null
			}
			this.clear()
			this.result = this.perform(result[2],result[1],result[3])
			this.maj_line_calcul()
			this.maj_line_result()
			return this.result
	}

	maj_line_result(){
		if (arguments[0]){
			document.getElementById('result-line').innerHTML = arguments[0]
		} else {
			document.getElementById('result-line').innerHTML = this.result
		}
	}

	maj_line_calcul(){
		document.getElementById('calcul-line').innerHTML = this.calculs.join("")
	}
}

module.exports = new Calculator()