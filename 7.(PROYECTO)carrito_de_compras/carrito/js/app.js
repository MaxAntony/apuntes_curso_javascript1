// variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCurso = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// listeners
cargarEventListeners();
function cargarEventListeners() {
  //dispara cuando se presiona agregar carrito
  cursos.addEventListener('click', comprarCurso);

  // cuando se elimina el curso del carrito
  carrito.addEventListener('click', eliminarCurso);

  // vaciar carrito
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

  // al cargar el documento
  document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

// funciones
// añade curso al carrito
function comprarCurso(e) {
  e.preventDefault();

  // delegation para agregar a carrito
  if (e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement;
    // enviamos el curso seleccionado para obtener los datos
    leerDatosCurso(curso);
  }
}
// lee datos del curso
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
  };
  insertarCarrito(infoCurso);
}

// muestra el curso seleccionado en el carrito
function insertarCarrito(infoCurso) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      <img width=100 src="${infoCurso.imagen}"
    </td>
    <td>${infoCurso.titulo}</td>
    <td>${infoCurso.precio}</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
    </td>
  `;
  listaCurso.appendChild(row);
  guardarCursoLocalStorage(infoCurso);
}

function eliminarCurso(e) {
  e.preventDefault();
  let cursoId;
  if (e.target.classList.contains('borrar-curso')) {
    e.target.parentElement.parentElement.remove();
    cursoId = e.target.getAttribute('data-id');
    eliminarCursoLS(cursoId);
  }
}

// elimina los cursos del carrito en el DOM
function vaciarCarrito(e) {
  // forma lenta para el navegador
  // listaCurso.innerHTML = '';

  // forma rapida recomendada
  while (listaCurso.firstChild) {
    listaCurso.removeChild(listaCurso.firstChild);
  }

  //vaciar localStorage
  vaciarLocalStorage();
}

// almacena curso al localStorage
function guardarCursoLocalStorage(curso) {
  let cursos = obtenerCursosLocalStorage();
  cursos.push(curso);
  localStorage.setItem('cursos', JSON.stringify(cursos));
}

function obtenerCursosLocalStorage() {
  let cursosLS;
  if (localStorage.getItem('cursos') === null) {
    cursosLS = [];
  } else {
    cursosLS = JSON.parse(localStorage.getItem('cursos'));
  }
  return cursosLS;
}

//imprime cursos de LS en carrito
function leerLocalStorage(e) {
  let cursosLS = obtenerCursosLocalStorage();
  cursosLS.forEach(function (curso) {
    // contruir el template
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
      <img width=100 src="${curso.imagen}"
    </td>
    <td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
    </td>
  `;
    listaCurso.appendChild(row);
  });
}

function eliminarCursoLS(cursoId) {
  let cursosLS = obtenerCursosLocalStorage();
  // cursosLS.forEach((cursoLS, index) => {
  //   if (cursoLS.id === cursoId) {
  //     cursosLS.splice(index, 1);
  //   }
  // });
  // BUG: esto elimina de manera ineficiente por que al eliminar algo del array el array cambia pero el indice de iteracion no dando errores en el resultado final, la solucion esta en esta respuesta de stackoverflow: https://stackoverflow.com/questions/24812930/how-to-remove-element-from-array-in-foreach-loop

  // recorremos el array inversamente para evitar errores al momento de eliminar items de este
  for (let i = cursosLS.length - 1; i >= 0; i--) {
    console.log(i);
    if (cursosLS[i].id === cursoId) {
      // eliminamos el curso
      cursosLS.splice(i, 1);
    }
    // aun que esta no me parece la manera msa correcta por que lo que deberia hacer es ubicar el indice del curso por el id y hacer un splice directamente, pero lo bueno de esta manera es que elimina duplicados pero en produccion el usuario no debe poder duplicar sus cursos asi que queda inutil
  }
  localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

function vaciarLocalStorage() {
  localStorage.clear();
}
