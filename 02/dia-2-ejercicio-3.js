
// ejercicio 1
let string = "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.";
const palabras = string.split(" ");
let contador = 0;

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].toLowerCase().startsWith("amor")) {
    contador++;
  }
}

console.log("El número de veces que aparece la palabra 'amor' es: " + contador);

// ejercicio 2

string = "No puedes terminar una oración con porque porque porque es una conjunción";
const coincidencias = string.match(/porque/gi);

console.log("El número de veces que aparece la palabra 'porque' es: " + coincidencias.length);


// ejercicio 3

string = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const stringLimpio = string.replace(/[^\w\s]/gi, '');

console.log(stringLimpio)

