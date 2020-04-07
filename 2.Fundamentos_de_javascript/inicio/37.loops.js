// for
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('voy en el 5');
    continue; // cancela la iteracion actual y salta a la siguiente iteracion
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('voy en el 5');
    break; // corta le ejecucion del bucle y sle de el completamente
  }
  console.log(i);
}

// while
let i = 0;
while (i < 5) {
  if (i === 3) {
    console.log('estoy en el tres');
    i++; // recuerda poner el incremento sino entrara en bucle infinito
    continue; // aqui tambien podemo usar continue y break
  }
  console.log(i);
  i++;
}

// do while
let uno = 1;
do {
  console.log('se ejcutara al menos una vez');
} while (uno == 2);
