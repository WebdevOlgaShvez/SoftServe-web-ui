//1. Навпаки  

//Запитайте у користувача тризначне число і виведіть його задом наперед. 
//Для вирішення завдання вам знадобиться оператор % (залишок від ділення).
//321
let number = +prompt("enter number");
if (number === 0){
    alert(0);
} else if(number < 0){
number = -1*number;
let a = number%10;
let c = Math.trunc(number%100/10);
let d = Math.trunc(number/100);
let revNumber = `${a}${c}${d}`;

alert(-1*Number(revNumber));
} else{
    let a = number%10;
    let c = Math.trunc(number%100/10);
    let d = Math.trunc(number/100);
    let revNumber = `${a}${c}${d}`;
    
    alert(revNumber);
}


//2. Температурний помічник.

//Кевін щойно приїхав зі США і не може звикнути до нашої системи вимірювання температури.
// Напишіть код, де б він міг ввести нові для нього градуси в Цельсіях і отримати старі добрі Фаренгейти.
const t = prompt("enter temperature in C");
const tempInFar = parseFloat((t * 9/5) + 32);
alert(`temperature from celsius to fahrenheit is ${tempInFar}`);

//3. Конвертер кольору.

//Користувач вводить по черзі кольори (червоний, зелений, синій) у вигляді шістнадцяткового запису, а вивести йому цей колір у вигляді rgb(12,13,14)

//#112233 --> rgb(17,34,51)
//#f3e4a0 --> rgb(243,228,160)
const red = prompt("enter red", 100);
const green = prompt("enter green", 100);
const blue = prompt("enter blue", 100);
const r = parseInt(red, 16);
const g = parseInt(green, 16);
const b = parseInt(blue, 16);
console.log(`rgb(${r}, ${g}, ${b})`);