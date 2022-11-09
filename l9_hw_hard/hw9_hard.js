//Написати функцію – калькулятор. Функція приймає рядок з прикладом, визначає, яка дія необхідна виконати
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
