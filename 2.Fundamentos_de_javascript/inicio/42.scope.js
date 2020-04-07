//es la visibilidad que tiene un valor dentro de una funcion, bloque, for, etc
var a = 'a';
let b = 'b';
const c = 'c'; // a b y c se consideran variables globales, por que no estan dentro de un bloque de codigo o funcion y pueden ser accedidos desde todo el programa, su visibilidad es global

//scope de la funcion
function functionScope() {
  // las variables que son globales se reescriben dentro de la funcion, la impresion global imprime las minusculas por que no tienen idea de la existencia de las variables dentro de esta funcion
  // el scope de estas variables es local, nada mas existe dentro de esta funcion, los globales son accesibles desde todos lados, los globales son accesibles aqui sin embargo los estamos reescribiendo
  var a = 'A';
  let b = 'B';
  const c = 'C';
  console.log('funcion: ' + a + b + c);
}
functionScope();

console.log('globales: ' + a + b + c); // ninguna variable global es modificada

//scope de bloque, usualmente este scope esta dentro de llaves
if (true) {
  var a = 'AA';
  let b = 'BB';
  const c = 'CC';
  console.log('bloque: ' + a + b + c);
}

console.log('globales: ' + a + b + c); // como vemos la variable con var es reescrita ,pero let y const no, esto es algo en lo que var falla, lo mismo pasaria con el bloque en un bucle for, si ponemos como var al contador esta se reescribira dando inconsistencias
