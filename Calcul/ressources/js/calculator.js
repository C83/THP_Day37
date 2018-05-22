class Calculator {
	// eval();                     // executes a string as if it was script code
	add() {
		// Evite une erreur si les paramètres sont vides
		if (arguments[0]){	
			// La première valeur est définie comme notre valeur initiale
		    var result = arguments[0]
		    // On teste s'il y a d'autres valeurs
		    if (arguments.length > 1){
			    // On additionne les autres valeurs
			    for (var i = 1; i < arguments.length; i++) {
		    	    result += arguments[i]
		    	}
		   	}
		    return Number(result);
		} else {
			// Message dans le cas où il n'y a pas de paramètre
			return "Veuillez spécifier une valeur"
		}
	}
	
	substract() {
		// Evite une erreur si les paramètres sont vides
		if (arguments[0]){	
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
			return "Veuillez spécifier une valeur"
		}
	}

	divide() {
		// Evite une erreur si les paramètres sont vides
		if (arguments[0]){	
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
			return "Veuillez spécifier une valeur"
		}
	}

	multiply() {
		// Evite une erreur si les paramètres sont vides
		if (arguments[0]){	
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
			return "Veuillez spécifier une valeur"
		}
	}
}

module.exports = new Calculator()