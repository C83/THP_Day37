function my_max() {
	// Evite une erreur si les paramètres sont vides
	if (arguments[0]){	
		// Permet de tester si ce qui est passé en argument est un array. 
		// Si c'est bien le cas, le tableau arguments devient le tableau passé en paramètre
    	if (arguments[0].constructor === Array ) { arguments = arguments[0] }
	    // La première valeur est définie comme notre valeur max. On compare les autres à cette valeur là
	    var max = arguments[0]
	    // On teste s'il y a d'autres valeurs
	    if (arguments.length > 1){
		    // On teste les autres valeurs
		    for (var i = 1; i < arguments.length; i++) {
	    	    if (arguments[i] > max) { max = arguments[i] }
	    	}
	   	}
	    return Number(max);
	} else {
		// Message dans le cas où il n'y a pas de paramètre
		return "Veuillez spécifier une valeur"
	}
}

console.log( my_max([1, 123, 500, 115, 44, 88]) )
console.log( my_max(5, 342, 80, 88) )
console.log( my_max(5, 342, "aa", 88) )
console.log( my_max(5, 342, "343", 88) )
console.log( my_max(3) )
console.log( my_max() )

function vowel_count( my_string) {
	// RegExp regroupant les voyelles
	// i pour indiquer que ce n'est pas sensible à la casse
	// g pour qu'il ne s'arrête pas quand il toruve le premier
	var re = /[aeiouy]/ig
	return my_string.match(re).length 
}

console.log( vowel_count("ut eget auctor turpis, in.") )
console.log( vowel_count("Lorem ipsum dolor sit amet") )
console.log( vowel_count("a") )

function reverse( my_string) {
	var new_string = new Array
	var length = my_string.length
	for (var i = 0; i < length; i++) {
	    new_string[i] = my_string[length-1-i]
	}
	return new_string.join("")
}

console.log( reverse("ut eget auctor turpis, in.") )
console.log( reverse("Lorem ipsum dolor sit amet") )
console.log( reverse("a") )