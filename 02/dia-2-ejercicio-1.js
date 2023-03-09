

// Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio = '30 días de JavaScript';
// Imprima la cadena en la consola del navegador usando console.log()
console.log(desafio);
// Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafio.length);
// Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(desafio.toUpperCase());
// Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(desafio.toLowerCase());
// Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafio.substring(0,2));
// Corta la frase dias de JavaScript de 30 dias de JavaScript.
console.log(desafio.substring(3,7));
// Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(desafio.includes('Script'));
// Divide la cadena en un array usando el método split()
console.log(desafio.split());
// Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log(desafio.split(" "));
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log( string.split(',') );
// Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log( desafio.replace('JavaScript','Python') );
// ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log( desafio.charAt(15) );
// ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log( desafio.charCodeAt(11) );
// Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log( desafio.indexOf('a') );
// Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log( desafio.lastIndexOf('a') );
// Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
string = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log( string.indexOf('porque') );
// Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log( string.lastIndexOf('porque') );
// Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log( string.search("porque") );
// Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, ' 30 días de JavaScript '.
string = ' 30 días de JavaScript ';
console.log( string.trim() );
// Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log( desafio.startsWith("30") );
// Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log( desafio.endsWith("t") );
// Usa el método match() para encontrar todos los a en 30 días de JavaScript
let pattern = /a/gi;
console.log( desafio.match(pattern) );
// Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
string = '30 días de';
let string2 = 'JavaScript'
console.log( string.concat(' ' + string2) );
// Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log( desafio.repeat(2) );