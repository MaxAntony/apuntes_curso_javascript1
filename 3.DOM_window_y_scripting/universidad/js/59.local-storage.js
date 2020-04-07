// local storage y session storage
// podemos almacenar datos tipo string en el navegador, estos datos estan relaciondos al sitio, un sitio tiene un espacio propio para sus datos de local storage y session storage, si borramos todos los datos con clear() solo se borraran de nuestro sitio

// agregar elemnto a localstorage, se usa llave - valor
localStorage.setItem('nombre', 'juan'); // aunque recarguemos la pagina o cerremos el navegador estos datos seguiran
console.log(localStorage.getItem('nombre'));
localStorage.clear(); //elimina todos los items relacionados a nuestro sitio

// sesion storage
sessionStorage.setItem('nombre', 'juan');
