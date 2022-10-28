//1. Об'єм Напишіть веб-додаток для розрахунку об'єму циліндра. Користувач вводить висоту циліндра і діаметр основи.

const d = +prompt("enter diameter of the cylinder");
const h = +prompt("enter height of the cylinder");
const volume = parseFloat(3.14*Math.pow(d/2, 2)*h);
alert(`volume is ${volume}!`);

document.getElementById("vol").innerHTML = volume;

//2. Привітання
//Запитайте в користувача його ім'я і виведіть у відповідь: "Привіт, його ім'я!".

const userName = prompt("What is your name?");
alert(`Hello, ${userName}!`);
document.getElementById("user").innerHTML = userName;
//3. Периметр квадрата
//Запитайте у користувача довжину сторони квадрата і виведіть периметр такого квадрата.

const a = +prompt("enter lenth of the square side");
const perimeter = 4 * a;
alert(`Perimeter is ${perimeter}!`);
document.getElementById("p").innerHTML = perimeter;
//4. Швидкість
//Запитайте в користувача відстань у км між двома містами та за скільки годин він хоче дістатися.
// Порахуйте швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const s = +prompt("enter km between cities");
const t = +prompt("enter the time you want to travel this distance, hours");
const speed = parseFloat(s/t);
alert(`You need to have speed ${speed} km/h!`);
document.getElementById("speed").innerHTML = speed;