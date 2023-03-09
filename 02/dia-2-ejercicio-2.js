

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

console.log( typeof('10') === 10 );
console.log( typeof('10') === 'string' );

console.log( parseFloat(9.8) === 10 );
console.log( Math.ceil(parseFloat(9.8)) === 10 );

console.log( 'Python'.includes('on') && 'jerga'.includes('on'));

let string = "Espero que este curso no esté lleno de jerga.";
console.log( string.includes('jargon') );

console.log( Math.ceil(Math.random() * 100) );

console.log( Math.ceil(Math.random() * 50) + 50);

console.log( Math.ceil(Math.random() * 255) );

string = 'JavaScript';
console.log( Math.ceil(Math.random() * string.length));

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

string = 'No puedes terminar una oración con porque porque porque es una conjunción';
let subcadena = string.substr(35, 21);
console.log(subcadena);

