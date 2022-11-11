//1.
//Напишіть веб-додаток для розрахунку щасливого квитка. Користувач вводить шестизначний номер квитка
 //(трамвай/тролейбус). Визначте, чи дорівнює сума перших трьох цифр сумі останніх трьох цифр. Виведіть 
 //повідомлення про "щасливість" квитка користувачеві.
 //1 variant
/*  const number = prompt("enter number");
 const digits1 = number.slice(0, 3).split("");
 const digits2 = number.slice(3).split("");
 let sum1 = digits1.reduce((i, sum) => i + parseInt(sum), 0);
 let sum2 = digits2.reduce((j, sum) => j + parseInt(sum), 0);
 if(sum1 === sum2){
       alert("you are lucky");
 } else{
    alert("try again");
 } */

 //2 variant
//const number = prompt("enter number");
function sumNumber(number){
 const digits1 = number.slice(0, 3).split("");
 const digits2 = number.slice(3).split("");
 let sum1 = digits1.reduce((i, sum) => i + Number(sum), 0);
 let sum2 = digits2.reduce((j, sum) => j + Number(sum), 0);
 if(sum1 === sum2){
       alert("you are lucky");
 } else{
    alert("try again");
 }

}
//sumNumber(number);

//2.
 //Напишіть програму, що отримує у користувача рядок слів та повертає довжину найкоротшого
  //1 variant
//const str1 = prompt("enter some words");
//const arrWords = str1.split(" ").sort((a, b) => a.length - b.length);
//console.log(arrWords[0]); 

//2 variant
// const str2 = prompt("enter some words");
 function shortWord(str2){
    let arrWords = str2.split(" ").sort((a, b) => a.length - b.length);
    let word = arrWords[0];
    return word.length;
 }
 //console.log(shortWord(str2)); 

 //3 variant
 //const str3 = prompt("enter some words");
 function findShortWord(str3){
    let arrWords = str3.split(" ");
    let shortWord = arrWords.reduce((short, current) => {
        return current.length < short.length ? current : short;
        }, arrWords[0]);

    return shortWord.length;
 }
//console.log(findShortWord(str3));


//3.
//ДНК
//"ATTGC" // повертає "TAACG"
//"GTAT" // повертає "CATA" 
const dna = "CATArrr";
const dictionary = { A: 'T', T: 'A', C: 'G', G: 'C' };
//1 variant
function DNAStandart(dna) {
    
    const arr = dna.split('');
    const arr2 = arr.map((c) => {return dictionary[c]});
    const newStr = arr2.join('');
    return newStr;   
        
}
//console.log(DNAStandart(dna));

//2 variant
function DNAStandart1(dna) {
    const arr = dna.split('');
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        arr[i] = dictionary[arr[i]];
        arr1.push(arr[i]);
        
    }
    const newStr = arr1.join('');
    return newStr;    
}
//console.log(DNAStandart1(dna));

//3 variant
function DNAStandart2(dna) {
    let newStr ="";
    for(let i = 0; i < dna.length; i++){
       
        newStr += dictionary[dna[i]] ?? '';
    }
    return newStr;     
}
//console.log(DNAStandart1(dna));