//1.Нові дражнилки
//Зробіть генератор випадкових дражнилок зі своїм набором слів.

const randomAnimals = ["собака", "кіт", "лисиця", "криса"];
let randomWordOfAnimal = randomAnimals[Math.floor(Math.random()*4)];
//console.log(randomWordOfAnimal);

//2.Удоскональте генератор дражнилок, щоб він створював дражнинилки такого типу: "У тебе [частина тіла] 
//ще більш [прикметник], ніж [частина тіла тварини] у [тварини]".
const randomPartOfAnimals = ["лапа", "хвіст", "морда", "клики"];
const randomPartOfHuman = ["нога", "рука", "голова", "тіло"];
const randomAdjectives = ["велика", "страшна", "дурна", "безглузда"];
let randomWordOfPartOfAnimal = randomPartOfAnimals[Math.floor(Math.random()*4)];
let randomWordOfHuman = randomPartOfHuman[Math.floor(Math.random()*4)];
let randomWordOfdjectives = randomAdjectives[Math.floor(Math.random()*4)];
let text = `У тебе ${randomWordOfHuman} ще більш ${randomWordOfdjectives}, ніж ${randomWordOfPartOfAnimal} у ${randomWordOfAnimal}`;
//console.log(text);

//3.Зробіть дві версії свого генератора дражнилок: одна нехай використовує для складання дражнилки оператор +,
//а інша створює масив зі словами і з'єднує їх через пробіл за допомогою join. Який варіант вам більше подобається і чому?

//4.Як за допомогою методу join перетворити масив [3, 2, 1] на рядок "3 більше, ніж 2 більше, ніж 1"?

let arr = [3, 2, 1];
arr.join(" більше, ніж ");

//Підрахунок очок
const myObj ={
    "Anna": 0,
    "Olga": 0,
    "Ira": 0
}

myObj['Anna'] = myObj['Anna'] + 1;
myObj['Olga'] = myObj['Olga'] + 1;
myObj['Ira'] = myObj['Ira'] + 1;
//console.log(myObj['Anna']);

//Углиб об'єктів і масивів
const myCrazyObject = {
    "name": "Безглуздий об'єкт",
    "some array": [7, 9, { purpose: "плутанина", number: 123 }, 3.3],
    "random animal": "Бананова акула"
    };

    //console.log(myCrazyObject['some array'][2].number);