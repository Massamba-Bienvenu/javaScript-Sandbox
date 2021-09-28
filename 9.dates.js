let val;

const today = new Date();
//specifier un format de date
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth(); 
val = today.getDate(); //jour du mois
val = today.getDay(); //jour de la semaine
val = today.getFullYear(); 
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //temps en millisecondes depuis ce jour

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);