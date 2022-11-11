//1. Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка. Користувач вводить номер 
//місця, вивести йому номер купе, тип місця - бічне чи ні, верхнє чи нижнє.

/* const seat = +prompt("enter number of your seat");
let upDown = "top";
let sideUnside ="no side";
let number = 0;
if(seat % 2 ){
   upDown = "bottom";
}
if(seat <=36 ){
   number = Math.floor((seat - 1)/4 + 1);
} else{
   number = Math.floor((54 - seat)/2 + 1);
   sideUnside ="side";
} */
//console.log(`you have ${number} of compartment, ${sideUnside}, ${upDown} seat` );

//2. Написати функцію – калькулятор. Функція приймає рядок з прикладом, визначає, яка дія необхідна виконати
// (+ - * /), переводить операнди у числа, вирішує приклад та повертає результат.

//calc(12, 4, '+') //16
//calc(1, 4, '-') //-3
//calc(12, 5, '/') //2.4
//calc(1.2, 3, '*') //3.6

//var1
function calc(str){
let arr = str.split(",").map((e) => e.trim().replace(/'/g, ""));
let a = Number(arr[0]);
let b = Number(arr[1]);
let sign = arr[2];
switch (sign){
    case "+":
        res = a + b;
        break;
    case "-":
       res = a - b;
       break;
    case "*":
       res = (a * b).toFixed(1);
       break;
    case "/":
       res = (a / b).toFixed(1);
       break;
    default:
        res = "No value found";
}
return res;
}

//console.log(calc("12, 5, '/'"));
//var2
function calc1(a, b, sign){
    num1 = Number(a);
    num2 = Number(b);
    switch (sign){
        case "+":
            res = num1 + num2;
            break;
        case "-":
           res = num1 - num2;
           break;
        case "*":
           res = (num1 * num2).toFixed(1);
           break;
        case "/":
           res = (num1 / num2).toFixed(1);
           break;
        default:
            res = "No value found";
    }
    return res; 
}

//console.log(calc1(12, 5, '/'));

// 3.Tic-Tac-Toe Checker

let gameField = [
   [1, 1, 1],
   [2, 2, 2],
   [2, 1, 2]
];

let winner = -1;

function getWinner(){
   for (let i = 0; i < gameField.length; i++) {
       if (gameField[i][0] === gameField[i][1] && gameField[i][1] === gameField[i][2]){
         winner = gameField[i][0];
       } 
     }

     for(let j = 0; j < gameField[0].length; j++) {
       if (gameField[0][j] === gameField[1][j] && gameField[1][j] === gameField[2][j]){
         winner = gameField[0][j];
       } 
     }

     if (gameField[0][0] === gameField[1][1] && gameField[1][1] === gameField[2][2]) {
            winner = gameField[0][0];
        }

     if (gameField[0][2] === gameField[1][1] && gameField[1][1] === gameField[2][0]) {
      winner = gameField[0][2];
       }

     return winner;
 
}
console.log(getWinner());
