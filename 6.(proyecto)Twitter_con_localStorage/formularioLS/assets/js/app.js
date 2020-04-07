// variables
const listaTweets = document.getElementById('lista-tweets');

// event listeners
eventListeners(); // ponemos los eventlisteners en una funcion para que no sean globales y no se mesclen con otros, es buena practica
function eventListeners(e) {
  // cuando se envie el formulario
  document
    .querySelector('#formulario')
    .addEventListener('submit', agregarTweet);

  // borrar tweets
  listaTweets.addEventListener('click', borrarTweet);

  // contenido cargado
  document.addEventListener('DOMContentLoaded', localStorageListo); //se ejecutara cuando el dom este cargado
}

// funciones

// agregar tweet al dom
function agregarTweet(e) {
  e.preventDefault();
  const tweet = document.getElementById('tweet').value;
  // console.log(e.target.children[1].value); // tambien accedemos de esta forma

  // boton de eliminar
  const botonBorrar = document.createElement('a');
  botonBorrar.classList.add('borrar-tweet');
  botonBorrar.innerText = 'x';

  // creamos el elemnto
  const li = document.createElement('li');
  li.innerText = tweet;
  // agregamos el boton de borrar al tweet
  li.appendChild(botonBorrar);
  // agregamos el tweet
  listaTweets.appendChild(li);

  // agregar a localstorage
  agregarTweetALocalStorage(tweet);

  document.getElementById('tweet').value = '';
  document.getElementById('tweet').focus();
}

// elimina tweet del dom
function borrarTweet(e) {
  e.preventDefault();
  if (e.target.classList.contains('borrar-tweet')) {
    if (confirm('desea borrar el tweet')) {
      e.target.parentElement.remove();
      borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
  }
}

function localStorageListo() {
  let tweets = obtenerTweetsLocalStorage();
  tweets.forEach(function (tweet) {
    // boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList.add('borrar-tweet');
    botonBorrar.innerText = 'x';

    // creamos el elemnto
    const li = document.createElement('li');
    li.innerText = tweet;
    // agregamos el boton de borrar al tweet
    li.appendChild(botonBorrar);
    // agregamos el tweet
    listaTweets.appendChild(li);
  });
}

//agrega tweet a localstorage
function agregarTweetALocalStorage(tweet) {
  let tweets = obtenerTweetsLocalStorage();
  tweets.push(tweet);
  //agregar a localstorage
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetsLocalStorage() {
  let tweets;
  if (localStorage.getItem('tweets')) {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  } else {
    tweets = [];
  }
  return tweets;
}

function borrarTweetLocalStorage(tweet) {
  let tweets, tweetBorrar;
  //elimina la x del twit
  tweetBorrar = tweet.substring(0, tweet.length - 1);
  tweets = obtenerTweetsLocalStorage();
  tweets.forEach(function (tweet, index) {
    if (tweet === tweetBorrar) {
      tweets.splice(index, 1);
    }
  });
  localStorage.setItem('tweets', JSON.stringify(tweets));
}
