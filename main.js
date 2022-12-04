//1

const num = 12321;

console.log(num.toString(16)); 
console.log(num.toString(2));

//2

const myName = `Andrii`;
const mysurname = `Nyzovyi`;
const myMiddleName = `Serhiiovych`;
const fullName = `My name is ${mysurname} ${myName} ${myMiddleName}`;

console.log(fullName);

//3 

const enterTheNumber = prompt(`Введите любое число`);

console.log(`К вашему числу добавили 2 = ${+enterTheNumber + 2}`);
console.log(`От вашего числа отняли 2 = ${+enterTheNumber - 2}`);
console.log(`Ваше число умножили на 2 = ${+enterTheNumber * 2}`);
console.log(`Ваше число поделили на 2 = ${+enterTheNumber / 2}`);

//4

console.log(`Количество введеных символов = ${enterTheNumber.length}`);

//5 

let nonInteger = 0.51000002;
const roundedNumber = nonInteger.toFixed(2)

console.log(`Округляем число ${+nonInteger} до двух знаков после запятой и добавляем к нему 2 = ${+roundedNumber + 2}`);

//6 

const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps';
const findIndex = str.indexOf(str_two);

console.log(`Cтрока str_two начинается в строке str c ${findIndex}-го символа!`);

console.log(str_two.toUpperCase());

//7 

const a = 1;
const b = 2; 
const c = 3; 
const d = 3;

console.log(a || b || C);
console.log()
console.log()
console.log()
console.log()
console.log()









