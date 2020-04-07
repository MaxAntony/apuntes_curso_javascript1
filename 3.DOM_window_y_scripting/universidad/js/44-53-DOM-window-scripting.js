// SECCIOM 44
/* let elemento;
elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');
//scriptss
elemento = document.scripts;
// console.log(elemento);

// ejemplo practico para convertir htmlCollection a arreglo
let imagenes = document.images;
let imagenesArr = Array.from(imagenes);
imagenesArr.forEach(function (imagen) {
  console.log(imagen);
}); */

// SECCION 45
/* let elemento;

elemento = document.getElementById('hero');
elemento = elemento.id;

elemento = document.getElementById('header');
elemento = elemento.className;

elemento = document.getElementById('encabezado').textContent; // tambien accedemos al texto con innerText
elemento = document.getElementById('encabezado');
elemento.style.background = '#ccc';
elemento.style.color = 'white';
elemento.style.padding = '50px';
elemento.textContent = 'texto cambiado';
console.log(elemento); */

// SECCION 46
/* // query selector, seleccionando un elemento
const encabezado = document.querySelector('#encabezado');
// podemos ejecutar las mismas acciones de la seccion anterior para modificar el elemento
// la diferencia con getElementById es que no solo podemos obtener elementos por el id sino tambien por la clase o por nombre de etiqueta, pero esta funcion solo retornara el primer elemento encontrado en el dom
const imgEncabezado = document.querySelector('.encabezado img'); // retorna elemento img
// tambien podemos usar la sintaxis de css queries por ejemplo seleccionando los enlaces de un menu
let enlace = document.querySelector('#principal a:last-child'); // devuelve el ultimo elemento del conjunto de enlaces
enlace = document.querySelector('#principal a:nth-child(3)'); // devuelve el tercer elemento de los enlaces
console.log(enlace); */

// SECCION 47
/* // seleccionando multiples elementos del dom
let enlaces = document.getElementsByClassName('enlace'); //regresara un htmlCollection de elementos que tengan la clase enlace
enlaces = enlaces[2];
//desde aqui podemos modificar de igual manera sus propiedades
//mezclando con querySelector
let listaEnlaces = document
  .querySelector('#principal')
  .getElementsByClassName('enlace'); // de esta manera podemos filtrar de mejor manera

//seleccionando por nombre de etiqueta
let links = document.getElementsByTagName('a'); // devuelve todos los enlaces de la pagina
links[18].style.color = 'red'; // tambien puedes convertirlo a arreglo para usar todas las propiedades de un array
let enlaces2 = Array.from(links);
enlaces2.forEach(function (e) {
  console.log(e.textContent);
}); */

// SECCION 48
/* // querySelectorAll, podemos obtener multiples elementos con la ventja de usar el query selector avanzado
let enlaces = document.querySelectorAll('#principal .enlace'); // nos devuelve un nodeList con todos los elementos que coincida, buscara un elemento que tenga el id principal y devolvera a los elementos que tengan la clase enlace
enlaces[1].style.background = 'red';

let enlaces2 = document.querySelectorAll('#principal a:nth-child(odd)'); // retornara todos los enlaces impares que esten dentro de un elemento con id principal
enlaces2.forEach(function (impar) {
  impar.style.background = 'green';
});
console.log(enlaces2); */

// SECCION 49 traversing, ingresando a los hijos del elementos
/* const navegacion = document.querySelector('#principal');
console.log(navegacion.childNodes); // devuleve los nodos hijos pero eso tambien incluye a los saltos de linea
console.log(navegacion.children); // este si devuelve sin los saltos de linea y solo elementos html
console.log(navegacion.children[0].nodeName); // devuelve el nombre de etiqueta html
console.log(navegacion.children[0].nodeType); // devuelve el tipo de etiqueta html
// tipos de elementos del dom
// 1 : elemento
// 2 : atributo
// 3 : text node
// 8 : comentario
// 9 : documentos
// 10 : doctype
navegacion.children[0].textContent = 'cambiando texto de hijo';

const barra = document.querySelector('.barra');
console.log(barra.children[0].children[0].children);

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].lastElementChild);
console.log(cursos[0].childElementCount); // cuanta la cantidad de elementos hijos */

// SECCION 50 traversing padre al hijo
/* const enlaces = document.querySelectorAll('.enlace');
console.log(enlaces);
console.log(enlaces[0].parentElement); // elemento padre, podemos ir tan arriba como de pueda

const card = document.querySelectorAll('.card');
console.log(
  (card[0].parentElement.parentElement.parentElement.children[0].textContent =
    'hola desde traversing'),
);

// obteniendo elemento hermano previo, los siblings son los que estan al mismo nivel
console.log(enlaces[4].previousElementSibling.previousElementSibling);
console.log(
  enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4]
    .textContent,
); // va y vuelve

// recuerda que tambien puedes ver el acceso al dom como arriba, abajo, izquierda, derecha; en lo personal cero que es mas entendible de esta manera */

// SECCION 51 creando elementos
/* const enlace = document.createElement('a'); // creamos una etiqueta a
enlace.className = 'enlace';
enlace.id = 'nuevo-id';
enlace.setAttribute('href', '#');
enlace.textContent = 'nuevo enlace';

document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace); */

// SECCION 52 reemplazar elementos
/* const nuevoEncabezado = document.createElement('h2');
nuevoEncabezado.id = 'encabezado';
nuevoEncabezado.appendChild(document.createTextNode('reemplazo de elemento')); // esta es otra forma de agregar texto, agregando un hijo de tipo textNode
// cuando reemplazamos siempre tenemos que tomar el elemento nuevo y el elemento anterior y tomar como referencia al padre
const anterior = document.querySelector('#encabezado');
const elementoPadre = document.querySelector('#lista-cursos');
elementoPadre.replaceChild(nuevoEncabezado, anterior); */

// SECCION 53 eliminando
// eliminando elementos
const enlaces = document.querySelectorAll('.enlace');
const navigation = document.querySelector('#principal');
enlaces[0].remove(); // borrar desde la coleccion de elementos
navigation.removeChild(enlaces[1]); // o desde el padre pasandole el elemento a eliminar
// agregando y eliminando clases
const primerLi = document.querySelector('.enlace');
let elemento;
console.log(primerLi.className); // devuelve un string de las clases
primerLi.classList.add('nueva_clase'); // agregamos una clase
console.log(primerLi.classList); // devuelve las clases en array
primerLi.classList.remove('nueva_clase'); // eliminamos una clase
console.log(primerLi.classList); // devuelve las clases en array
// atributo
console.log(primerLi.getAttribute('href'));
primerLi.setAttribute('href', 'https://maxantony.net');
console.log(primerLi.getAttribute('href'));
primerLi.setAttribute('data-id', '1'); // este es un atributo personalizado, no existe en html, solo es para usarlo nosotros
console.log(primerLi.getAttribute('data-id'));
console.log(primerLi.hasAttribute('data-id')); // verifica que exista un atributo
primerLi.removeAttribute('data-id'); // elimina un atributo
console.log(primerLi.hasAttribute('data-id')); // verifica que exista un atributo
