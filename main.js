/*1.- Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”*/

// let name = prompt("ingresa tu nombre");
// let lastname = prompt("ingresa tu apellido");
// let age = prompt("ingresa tu edad");

// let user = (name, lastname,  age) => {
//      return `Hola mi nombre es ${name} ${lastname} y mi edad es: ${age}`;
// }

//  console.log(user(name, lastname, 30));


/* 2.- Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
 */
function sumaCubos(...rest) {
  let suma = 0;
  for (i = 0; i < rest.length; i++) {
    suma = suma + Math.pow(rest[i], 3);
  }
  return suma;
}

console.log(sumaCubos(1, 5, 9));

/* 3.- Crear una funcion que me retorne el tipo de valor entregado, utilizar la función e imprimir los distintos tipos de JS. */
// function sumar (a,b) {
//   return a + b
// }

// console.log(typeof sumar(8 ,5));

/* 4.- Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
 */
function sumar(a, b, ...rest) {
  let resultado = a + b;

  rest.forEach(n => {
    resultado += n;
  });

  return console.log(resultado);

}

console.log(sumar(1, 2, 3));

/* 5.- Crear una función que reciba una matriz de valores y filtre los valores que no son string */

let string = [true, false, '', 'hola', '', 'mundo', 7, ['soy', 'array'], null]

console.log(string.filter(e => typeof e === 'string' && e !== ''));

/* 6.- Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 */
let numbers = [1, 2, 3, 4, 5];

function minmax(...matriz) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  let maxmin = [min, max];

  return maxmin;
}

console.log(minmax(...numbers));

/* 7.- Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
 */
let phoneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function formatPhoneNumber(p) {
  return `(${p[0]}${p[1]}${p[2]}) ${p[3]}${p[4]}${p[5]}-${p[6]}${p[7]}${p[8]}${p[9]}`;
}


console.log(formatPhoneNumber(phoneNumbers));

/*8.- Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2
*/
let array = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];

function arrUnica(array) {

  let alt1 = Math.max.apply(null, array[0]);
  let alt2 = Math.max.apply(null, array[1]);
  let alt3 = Math.max.apply(null, array[2]);

  return [alt1, alt2, alt3];
}

console.log(arrUnica(array));

/* 9.- Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
 */
let cadenaTexto = 'Hola mundo';

function firstLast(cadenaTexto) {

  let firstT = cadenaTexto.charAt(0);
  let lastT = cadenaTexto.charAt(cadenaTexto.length - 1);


  return [firstT, lastT];
}

console.log(firstLast(cadenaTexto));

/*10.- Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
  */
let obj = { a: 1, b: 2 };
function objarray(obj) {
  let salida = Object.entries(obj);
  return salida
}

console.log(objarray(obj));

/*11.- Cree la función que toma una matriz con objetos y devuelve la suma de los budgets de las personas.
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700
 */

let users =[
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
];

function xpres (users){
    let xpres1 = users[0].budget
    let xpres2 = users[1].budget
    let xpres3 = users[2].budget

    let totalpres = xpres1 + xpres2 + xpres3
    return totalpres
};

console.log (xpres (users));

/* 12.-Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
 */

let user = {
  name: 'sebastian',
  lastname: 'yabiku',
  age: 33
}

for (const key in user) {
  console.log('key', key);
  console.log('value',user[key]);

} 




