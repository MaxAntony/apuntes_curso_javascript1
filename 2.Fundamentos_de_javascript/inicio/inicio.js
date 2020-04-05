// // obtenemos un elemento del dom por su id y le agregamos contenido
// let element = document.getElementById("id");
// element.innerHTML = "hola mundo";

// // obtener datos
// let nombre = prompt("cual es tu nombre");
// let edad = prompt("cual es tu edad");
// document.getElementById(
//   "mensaje"
// ).innerHTML = `Bienvenido ${nombre} de ${edad} años`;

// // ver tiempo de ejecucion de codigo
// console.time('Hola');
// console.warn('codigo');
// console.warn('codigo');
// console.warn('codigo');
// console.warn('codigo');
// console.warn('codigo');
// console.warn('codigo');
// console.timeEnd('Hola');

// // crear varibles
// var nombre = 'max'; // no recomendable
// let nombre2 = 'mex', // declarar dos variables abreviadamente
//   apellido = 'paucar';
// const nombre3 = 'mix';

// // strings
// let str1 = '"hola"';
// let str2 = "'hola'";
// let str3 = '\'hola\'';
// console.log(str1, str2, str3);

// // buscar indice de una dedena
// let cadena = "hola como estas";
// console.log(cadena.indexOf("como")); //se imprime un entero que indica donde empieza el texto seleccionado en este caso 5 por
// // ser la posicion de 'c', si no encuentra devuelve -1

// // cortar y reemplazae texto
// let cadena = "hola como estas";
// console.log(cadena.substring(2, 8));
// console.log(cadena.slice(-3)); //devuelve las ultimas 3 letras
// console.log(cadena.slice(3)); //devuelve el string menos la 3 primeras letras, tambien acepta inicio y fin
// console.log(cadena.split(" ")); //devuelve un array, corta el texto en los espacios
// console.log(cadena.replace("estas", "te encuentras"));
// console.log(cadena.includes("max")); //verifica si existe el texto ingresado

// //numeros
// console.log(Math.PI);
// console.log(Math.round(2.2));
// console.log(Math.round(2.8));
// console.log(Math.ceil(2.1)); //redondeo hacia arriba
// console.log(Math.floor(2.8)); //redondeo hacia abajo
// console.log(Math.sqrt(144)); //raiz cuadrada
// console.log(Math.abs(-5)); //valor absoluto
// console.log(Math.pow(8, 3)); // potencia
// console.log(Math.min(...[4, 2, 6, 7, 8, 4, 3.9, 1])); //devuelve el numero mas bajo
// console.log(Math.max(...[4, 2, 6, 7, 8, 4, 3.9, 1])); //devuelve el numero mas alto
// console.log(Math.random());

// // incremento
// let number = 10;
// console.log(number++); // la salida de esto es 10 y es por que primero envia el numero y despues evalua la expresion
// console.log(number); //por eso si imprimimos la variable veremos que su valor ya cambio por que nos da 11
// // si queremos ver al momento el cambio en la variable cambiamos el orden del operador
// console.log(++number); //esto es por que ahora incrementa el numero y despues lo envia para imprimir
// // sumar una cantidad
// console.log((number += 3));
// console.log((number -= 3));

// //tipos de datos
// // null != undefined, null es de tipo objeto
// console.log(typeof null); //estraño
// let simbolo = Symbol("simbol");
// console.log(simbolo);
// // tipos de datos complejos o de referencia
// let valor = [4, 5];
// console.log(typeof valor); // mostrara que el array es del tipo objeto
// console.log(valor); // ahora en el proto si nos dira que es un array
// valor = {};
// console.log(typeof valor); // el objeto es de tipo objeto
// valor = new Date();
// console.log(typeof valor); // una fecha tambien va a ser de tipo objeto

// // comparadores
// console.log(20 == "20");
// console.log(20 === "20"); //se revisa el tipo de dato, recomendable
// console.log(2 !== 3);
// // A,B,C ... X,Y,Z,a,b,c ... x,y,z :de menor a mayor ==>
// // los primeros son de menor nivel
// console.log("a" > "b"); // y como a esta antes que ve entonces es menor y no mayor
// console.log("a" < "b"); // por eso a es menor que b
// console.log("z" > "A"); // z es la mayor de todas
// console.log(null == undefined); // da true por que ambos no tienen valores
// console.log(null === undefined); // pero no son del mismo tipo

/*
//string a numero
const n1 = "50",
  n2 = 10,
  n3 = "tres";
console.log(n1 + n2); // al ser string concatena
console.log(Number(n1) + n2); //convertimos el string a numero
console.log(parseInt(n1) + n2); //otra forma con parseInt pero es lo mismo
console.log(n1 - n2); // si pones - si restara
// algo interesante al convertir a number algo no convertible
console.log(typeof Number(n3)); //devuelve que es del tipo number dando la falsa idea de que se convirtio, lo mismo con parseint
console.log(Number(n3)); //pero si vemos el valos es NaN, en ves de verificar si es un numero puedes utilizar la funcion isNaN
console.log(isNaN(Number(n3)));
//decimales
console.log(Number("49"));
console.log(Number("49.768")); // number transforma ya sea en entero o con punto flotante
console.log(parseInt("49.768")); // el parseint eliminara los decimales
console.log(parseFloat("49.768")); //y parse float los mantendra
// tofixed
console.log((455.234574567).toFixed(3)); //define el numero de decimales a mantener, devi¿uelve un string asi que tienes que convertirlo
 */

/* //numero a string
console.log((3).toString());
console.log(String(3.6));
console.log(String([3, 6, 8, true])); //devuele un string con los valores separado por comas
console.log(String([3, 6, 8, true]).length); //tamño de la cadena */

/* // template literals
let producto1 = "mani",
  precio1 = 50,
  producto2 = "cebolla",
  precio2 = 20;

let html = `
  <li>producto1: ${producto1} </li>
  <li>precio: ${precio1} </li>
  <li>producto2: ${producto2} </li>
  <li>precio: ${precio2} </li>
  <li>total: ${total(precio1, precio2)} </li>
  `; // todo codigo de js puede estar dentro de los template literals
function total(n1, n2) {
  return n1 + n2;
}
document.getElementById("app").innerHTML = html; */

/* // arreglos
const arreglo = [1, 2, 3, 4, 5, 6];
// const arreglo = new Array(1, 2, 3, 4, 5, 6);//otra forma pero muy verbosa y no muy utilizada
console.log(arreglo.length); //logitud del arregle
console.log(Array.isArray(arreglo)); //verifica que lo que pasemos sea un arreglo
arreglo[8] = 'salto'; //agregamos un elemento pero saltandonos 2 espacios
console.log(arreglo); //veremos que hay dos espacios vacios el index 6 y 7, si intentas acceder a ellos dara undefinded
console.log(arreglo.indexOf('salto')); //buscamos un elemento en el array y si lo encuentra devuelve el index y si no devuelve -1
arreglo.unshift('hola'); //agrefa un elemento al inicio del array
arreglo.push('last'); //agrega un elemento al final del array
console.log(arreglo);
arreglo.pop(); //remueve el ultimo elemento del array
arreglo.shift(); //remueve el primer elemento del array
console.log(arreglo);
arreglo.splice(2, 2); // removera desde el indice 2 a dos elementos
console.log(arreglo);
arreglo.splice(4, 2);
console.log(arreglo); // tambien elimina espacios vacios como el realizado al agregar 'salto'
arreglo.reverse(); //invierte el orden del array
console.log(arreglo);
let arr2 = [6, 7, 8, 9];
console.log(arreglo.concat(arr2)); //devuelve la union del array que le pasamos */

/* //ordenar un arreglo
const frutas = ['pera', 'mango', 'uva', 'papaya'];
frutas.sort(); //si ordenamos un array de strings lo ordenara sin problemas por que ordena en ascii
console.log(frutas);
const numeros = [8, 10, 100, 23, 47, 7, 9, 4, 5, 7, 3, 2, 4, 7];
numeros.sort();
console.log(numeros); // pero a los numeros no los ordenara correctamente
numeros.sort(function (x, y) {
  // si se pasara el indice 0 y 1 como ocurriria en la primera iteracion, x corresponderia al indice 1 y y al indice 0
  // puedes comprobar mandando a consola los valores
  return x - y;
});
console.log(numeros); //ahora si lo ordenara correctamente de manera ascendente, si queremos en descendente solo invertimos el orden de la operacion
numeros.sort(function (x, y) {
  return y - x; //invertimos para que ordene de manera descendente
  // tambien puedes ordenar array de objetos de esta manera
});
console.log(numeros); */

// const en objetos y arreglos
