//1 Объявите константу с целым числом числом и выведите ее в консоль в шестнадцатиричном и двочном виде.

const num = 12321;

console.log(num.toString(16)); 
console.log(num.toString(2));

//2 ВЫВОД В КОНСОЛЬ ОСУЩЕСТВИТЕ ПРИ ПОМОЩИ ШАБЛОННОЙ СТРОКИ, та что с `` кавычками и доларом ;)

const myName = `Andrii`;
const mysurname = `Nyzovyi`;
const myMiddleName = `Serhiiovych`;
const fullName = `My name is ${mysurname} ${myName} ${myMiddleName}`;

console.log(fullName);

//3 Используя prompt введите число как константу, затем выведите в консоль результаты операций + - * / на 2 над этим числом

const enterTheNumber = prompt(`Введите любое число`);

console.log(`К вашему числу добавили 2 = ${+enterTheNumber + 2}`);
console.log(`От вашего числа отняли 2 = ${+enterTheNumber - 2}`);
console.log(`Ваше число умножили на 2 = ${+enterTheNumber * 2}`);
console.log(`Ваше число поделили на 2 = ${+enterTheNumber / 2}`);

//4 Определити длинну строки введенной при помощи prompt и выведите длинну в консоль

console.log(`Количество введеных символов = ${enterTheNumber.length}`);

//5 Округлите число 0.51000002 до двух знаков после запятой и прибавте к нему 2, результат выведете в консоль

const nonInteger = 0.51000002;
const roundedNumber = nonInteger.toFixed(2)

console.log(`Округляем число ${+nonInteger} до двух знаков после запятой и добавляем к нему 2 = ${+roundedNumber + 2}`);

//6 Определите с какого символа строка str_two начинается в строке str. Преобразуте любую из этих строк к заглавным буквам, результат выведете в консольм

const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps';
const findIndex = str.indexOf(str_two);

console.log(`Cтрока str_two начинается в строке str c ${findIndex}-го символа!`);

console.log(str_two.toUpperCase());

//7 Сравните a c b, b c c, c c d и результаты между собой

const a = 1;
const b = 2; 
const c = 3; 
const d = 3;

//8  Простой пример демонстрирующий различая между == и ===

console.log('3' == 3); //true
console.log('3' === 3); //false

//9 Gродемонстрируйте работу оператора ??

const first = null;
const second = 2;

console.log(first ?? second); //return 2 
