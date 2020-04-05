/* // array contantes
const arr = [1, 2, 3, 4, 5];

// el arrego completo no puede ser reasignado pero los valores individuales si pueden ser modificados

console.log(arr);
arr[4] = true; // pero si podemos cambiar los valores individuales
console.log(arr);
arr[5] = 6; //Tambien podemos agregar valores de esta forma
console.log(arr);
arr.push(7); // tambien podemos agregar usando sus metodos
console.log(arr);
arr.shift(); // asi como eliminar valores, tambien todos los metodos del array se pueden usar para modificarlo
console.log(arr);
// arr = {}; //lo que no podemos hacer es cambiar enteramente el array
// arr = [3, 5, 7]; // esto tampoco se puede por que supone cambiar todo el array */

/* // OBJETOS
const persona = {
  nombre: 'max',
  apellido: 'paucar',
  profesion: 'developer',
  email: 'mm@ff.com',
  edad: 30,
  musica: ['rock', 'pop'],
  nacimiento: function () {
    return new Date().getFullYear() - this.edad; // con this accedemos a las propiedades del objeto, si no lo usamos dara que edad no esta definida
  },
};
console.log(persona);
console.log(persona.nombre); // se accede al valor mediante la llave
console.log(persona.musica[1]);
console.log(persona['nombre']); //otra forma de acceder al objeto pero no es muy usada, pero es util en algunas situaciones
console.log(persona.nacimiento()); */

/* // arreglo de objetos
const autos = [
  { modelo: 'mustang', motor: 6.0 },
  { modelo: 'camaro', motor: 6.1 },
  { modelo: 'challenger', motor: 6.2 },
];

console.log(autos);
console.log(autos[1].modelo);
autos[0] = 'primer elemento cambiado'; // al igual que con los arrays constantes, el onjeto es una constante por lo que en su totalidad no puede ser reasignado pero los valores individuales si pueden modificarse
// autos = {}; // esto dara error por que queremos cambiar el objeto constante en su totalidad
console.log(autos); */

// FUNCIONES
// ejemplos de funciones nativas
// console.log('funcion');
// prompt('funcion prompt');
// alert('funcion alert');

// no creas una funcion que haga todo, una funcion debe resolver un pequeño problema
//declaracion de una funcion:

//**********************  IMPORTANTE  ************ */
//recuerda que javascript primero hace un barrido del archivo rapido
/* function saludo() {
  console.log('hola max');
}
saludo();

function saludo(nombre) {
  console.log(`hola ${nombre}`);
}
saludo('max'); */

// la salida de este bloque sera
// hola undefined
// hola max

// eso es porque js leyo el archivo rapidamente y almaceno en espacio de memoria funciones y variables, si se declara el mismo nombre a varias funciones estas se reescriben y la ultima tiene importancia, y cuando js ejecuta realmente el archivo al llamas a saludo en la linea 62 ejecutara el contenido de la funcion en la linea 64 y como no se le pasa ningun argumento devolvera undefines¿d
//************************************************ */

/* function saludar(persona) {
  return `hola ${persona}`;
  console.log('hola'); // el codigo despues que se ejecute retur no se ejecuta por que ya termino la funcion
}
console.log(saludar('max')); //llamada a funcion

// valores por defecto
function saludar1(nombre = 'vistante') {
  return `hola ${nombre}`;
}
console.log(saludar1());

//function expression, tiene una sintaxis como de variable
const suma = function (a, b) {
  return a + b;
};
console.log(suma(1, 2));

// IIFE,funciones que se declaran y se ejecutan al tiempo
(function () {
  console.log('creando un IIFE');
})();
// es una version resumida de esto:
// function hola() {
//   console.log(hola);
// }
// hola()// solo que no hay nombres y como ves estos dos parantesis estan arriba

// tambien podemos pasar parametros:
(function (tecnologia) {
  console.log(`estudiando ${tecnologia}`);
})('javascript');

//metodos, sun funciones que pertenecen a un objeto
const musica = {
  reprducir: function (cancion) {
    console.log(`reproduciendo musica ${cancion}`);
  },
};
musica.reprducir('coldplay'); */

// TRY-CATCH
// si ejecuatamos este codigo:
/* algo();
obtenerCliente();

function obtenerCliente() {
  console.log('descargando...');
  setTimeout(() => {
    console.log('dedscarga completa');
  }, 3000);
} */
// dara error en algo() y no ejecutara obtenerClientes() por que al encontrar error detiene la ejecucion de todo el programa
// pero si hacemos uso de try podemos atrapar el error y seguir con la ejecucion del programa
/* try {
  algo();
} catch (error) {
  console.log(error);
}
obtenerCliente();

function obtenerCliente() {
  console.log('descargando...');
  setTimeout(() => {
    console.log('dedscarga completa');
  }, 3000);
} */
// solo usar cuando sea necesrio el trycatch
//finally: es el bloque donde ocurrs o no ocurra error este se ejecutara de todos modos
/* try {
  algo();
} catch (error) {
  console.log(error);
} finally {
  console.log('este codigo se ejecutara de todos modos');
} */
