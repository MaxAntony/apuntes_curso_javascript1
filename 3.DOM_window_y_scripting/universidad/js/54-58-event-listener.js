// click
/* document
  .querySelector('#submit-buscador')
  .addEventListener('click', function (evento) {
    evento.preventDefault(); // previene la accion por default que en los formularios es enviar los datos por la accion definida
    let elemento = evento;
    console.log(evento.target);
  });

document.querySelector('#encabezado').addEventListener('click', function (e) {
  console.log(e.target.innerText);
  e.target.innerText = 'nuevo encabezado';
}); */

/* // otros eventos con el mouse
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelector('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//click
// boton.addEventListener('click', obtenerEvento);
// doble click
// boton.addEventListener('dblclick', obtenerEvento);
// pasar mouse por encima
// boton.addEventListener('mouseenter', obtenerEvento);
// al dejar de pasar el puntero encima del elemento
// boton.addEventListener('mouseleave', obtenerEvento);
// similiar a mouseenter
// boton.addEventListener('mouseover', obtenerEvento);
// similar a mouseleave
// boton.addEventListener('mouseout', obtenerEvento);
// tiene que estar en el elemento y dar click, similar a click pero se ejecuta al iniciar el click
// boton.addEventListener('mousedown', obtenerEvento);
// lo contrario del anterior, se ejecuta al soltar el click
// boton.addEventListener('mouseup', obtenerEvento);

// se ejecuta al mover el mouse por el elemento
// encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
  console.log(`Evento: ${e.type}`);
} */

// 55. eventos para los imputs
/*const busqueda = document.querySelector('#buscador');
busqueda.style.color = 'black';
// busqueda.addEventListener('keydown', obtenerEvento);
// busqueda.addEventListener('keyup', obtenerEvento); // al momento de dejar de presionar la tecla, mejor
// busqueda.addEventListener('keypress', obtenerEvento);
// busqueda.addEventListener('focus', obtenerEvento);// al dar click en el input
// busqueda.addEventListener('blur', obtenerEvento); // al dar click fuera del input, muy usado para validar
// busqueda.addEventListener('cut', obtenerEvento); // cuando alguien corta el texto del input
// busqueda.addEventListener('copy', obtenerEvento); // cuando alguien copia el texto del input
// busqueda.addEventListener('paste', obtenerEvento); // cuando alguien pega texto del input
busqueda.addEventListener('input', obtenerEvento); // tiene todos los eventos, se dispara en cualquier evento

function obtenerEvento(e) {
  // document.querySelector('#encabezado').innerText = busqueda.value;
  console.log(busqueda.value);
  console.log(`Evento: ${e.type}`);
} */

// 56. event bubbling, por ejemplo tenemos un card y dentro un boton y cada uno tiene un evento click, al dar click en el boton tambien se dispararia el evento del card por que el boton es parte del cardd
/* const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

// card.addEventListener('click', function (e) {
//   console.log('click en card');
// });
// infoCurso.addEventListener('click', function (e) {
//   console.log('click en info curso');
// });
// agregarCarrito.addEventListener('click', function (e) {
//   console.log('click en agregar carrito');
// });
// si damos click en agregar carrito tambien se disparara los demas eventos por que agregarCarrito esta dentro de infoCurso y este esta dentro del card para evitar eso usamos stopPropagation para que el evento no afecte otros elementos
card.addEventListener('click', function (e) {
  e.stopPropagation();
  console.log('click en card');
});
infoCurso.addEventListener('click', function (e) {
  e.stopPropagation();
  console.log('click en info curso');
});
agregarCarrito.addEventListener('click', function (e) {
  e.stopPropagation();
  console.log('click en agregar carrito');
}); */

// 57 delegation, es una alternativa para el event bubblig
document.body.addEventListener('click', funcionEliminar); // agregamos el evento a todo el documento y por la propiedad de bubblig cualquier elemento ahora es clickeable, normalmente no se aplicara al body sino a una seccion donde esperes que haya clicks aunque no sepas que elemento daran click los usuarios

// en este caso por ejemplo tenemos tarjetar y como son varias agragarle el evento click a cada una no seria algo conveniente, por eso podemos filtrar el elemento por medio de su clase o cualquier atributo diferenciador

function funcionEliminar(e) {
  e.preventDefault();
  // console.log(e.target);
  console.log(e.target.classList);
  if (e.target.classList.contains('borrar-curso')) {
    // reaccionamos a los elementos que tengan esta clase
    e.target.parentElement.parentElement.remove(); // esto nos permite eliminar un curso del carrito
  }
  if (e.target.classList.contains('agregar-carrito')) {
    console.log('agregado al carrito');
  }

  // delegation es una forma en la que podemos esperar un click de cualquier lugar, comprobar el elemento que esta haciendo click y ejecutar el codigo correspondiete
}
