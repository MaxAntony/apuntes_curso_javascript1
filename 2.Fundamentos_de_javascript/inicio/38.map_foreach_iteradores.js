const pendientes = ['tarea', 'comer', 'proyecto', 'aprender'];
// foreach
pendientes.forEach((e, i, arr) => {
  console.log(`elemento: ${e}, indice: ${i}, array: ${arr}`);
  // tanto i como arr(este es el array) son opcionales
});

// map
const carrito = [
  { id: 1, producto: 'libro' },
  { id: 2, producto: 'teclado' },
  { id: 3, producto: 'laptop' },
  { id: 4, producto: 'navaja' },
];

const nombreProductos = carrito.map(e => {
  return e.producto;
  // map recibe una funcion y devuelve un array con el return de cada iteracion
});
console.log(nombreProductos);

// iterador
const automovil = {
  nombre: 'chevrolet',
  anio: '1098',
  marca: 'camaro',
};

for (let auto in automovil) {
  console.log(auto); // como el foreach pero para objetos y en cada iteracion devuelve la llave
}

for (let auto in automovil) {
  console.log(`${auto} : ${automovil[auto]}`); // aqui podemos ver mejor su funcionamiento
}

//otros iteradores internos de javascript
const cuidades = ['londres', 'new york', 'madrid', 'paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador');

console.log(cuidades);
console.log(ordenes);
console.log(datos);

// entries iterator, ver la ayuda de entries pasando el cursor encima de la funcion
for (let entrada of cuidades.entries()) {
  console.log(entrada); //devuelve cada uno de los valores como un array independiente con indice y valor
}
for (let entrada of ordenes.entries()) {
  console.log(entrada); // lo mismo que el enterior pero el indice  y el valor seran los mismos por que el set no tiene llava y por eso tienen el mismo valor
}
for (const entrada of datos.entries()) {
  console.log(entrada); // lo mismo, pero este devuelve llave y valor en un array individual
}

// values iterator , devuelve una lista de valores iterables
for (const valor of cuidades) {
  // no le ponemos .values() por que eso hace ya lo hace el forof por default cuando es array
  console.log(valor);
}
for (const valor of ordenes.values()) {
  console.log(valor);
}
for (const valor of datos.values()) {
  console.log(valor);
}

// key iterator
for (const llave of cuidades.keys()) {
  console.log(llave);
}
for (const llave of ordenes.keys()) {
  console.log(llave); // devuelve lo mismo por que en Set llave y valor son lo mismo
}
for (const llave of datos.keys()) {
  console.log(llave);
}

// entry devuelve llave y valor en cada iteracion, values los valores y keys las llaves en cada iteracion

// iterador por default
for (const porDefecto of cuidades) {
  console.log(porDefecto);
}
for (const porDefecto of ordenes) {
  console.log(porDefecto);
}
for (const porDefecto of datos) {
  console.log(porDefecto);
}

// iterando string
const mensaje = 'hola a todos';
for (const letra of mensaje) {
  console.log(letra);
}

// recorrere nodelist del dom
const enlaces = document.getElementsByTagName('a');
for (const enlace of enlaces) {
  console.log(enlace.href);
}
