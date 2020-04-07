// el window object es la ventana de navegacion
// ******************************************************************************
// Window is the main JavaScript object root, aka the global object in a browser, also can be treated as the root of the document object model. You can access it as window

// window.screen or just screen is a small information object about physical screen dimensions.

// window.document or just document is the main object of the visible (or better yet: rendered) document object model/DOM.

// Since window is the global object you can reference any properties of it with just the property name - so you do not have to write down window. - it will be figured out by the runtime.
// ******************************************************************************

console.log(window.innerHeight);
console.log(window.innerWidth);
// aqui tambien estan los objetos globales como console, pero como estan en el objeto global no es necesario escribir window
console.log(window.console.log('hola'));

// obtener queryString, si la url esta asi: http://127.0.0.1:5500/index.html?busqueda=hola
console.log(window.location.search); // salida: ?busqueda=hola
// window.location.href = 'https://google.com' // sintaxis para redireccionar
// window.history.go(-3) // regresa a las anteriores paginas visitadas, en este caso la antepenultima pagina visitada, cada unidad es una pagina web a la que podemos volver atras
console.log(window.navigator.language); // idioma en que el usuario tiene configurado sun pc
