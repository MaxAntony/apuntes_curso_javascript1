const edad = 18;
if (edad >= 18) {
  console.log('si puedes entrar');
} else {
  console.log('no puedes entrar');
}

//comprobar que una variable tenga un valor
let puntaje;
if (puntaje) {
  console.log(`el puntaje es ${puntaje}`);
} else {
  console.log('no hay puntaje');
}

// operador ternario, una sola linea (retorna un valor)
let mostrar = true;
mostrar ? console.log('mostrando') : console.log('no se muestra');
mostrar === 'pato' ? console.log('es pato') : console.log('no es pato');
let isMember = false;
console.log('La Cuota es de:  ' + (isMember ? '$2.00' : '$10.00'));
// operador ternario, multiples lineas
let age = 16;
let url =
  age > 18
    ? (console.log('OK, puedes continuar.'),
      console.log('aceptado'),
      'continue.html')
    : (console.log('Eres menor de edad!'),
      console.log('Disculpa :-('),
      'stop.html'); // ponemos multiples instrucciones y el ultimo que esta separado por comas es el valor que se devuelve
console.log(url); // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
