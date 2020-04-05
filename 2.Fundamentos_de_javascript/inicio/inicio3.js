//fechas
const diaHoy = new Date();
console.log(diaHoy);
// info: https://www.w3schools.com/js/js_date_formats.asp
let diaEspecifico = new Date('1998-11-3'); // año mes y dia, convierte un string a fecha, esto saldra siempre un dia atrasado y es por esto: https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
console.log(diaEspecifico);
diaEspecifico = new Date('1998/11/3'); // esto soluciona el problema de arriba brindandonos una fecha correcta
console.log(diaEspecifico);
diaEspecifico = new Date(1998, 1, 15); // esta es una mejor forma de hacerlo, pero tener cuidado por que el mes comienza en 0 asi que el 1 representa febrero
console.log(diaEspecifico);
console.log(diaEspecifico.getMonth()); // regresa el indice del mes, enero es 0
console.log(diaEspecifico.getDate()); // regresa el numero del mes
console.log(diaEspecifico.getDay()); // devuelve el indice de los 7 dias de la semana, domingo es 0
console.log(diaEspecifico.getTime()); // retorna los milisegundos que pasaron desde 1970
//cambiar el año, tambien puedes para cambiar meses, horas, etc
diaEspecifico.setFullYear(2016);
console.log(diaEspecifico);
