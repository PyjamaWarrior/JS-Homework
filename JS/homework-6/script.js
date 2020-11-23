// - создать массив с 20 числами.
const numbers = [1, 2, 5, 3, 7, 49, 32, 95, 50, 65, 75, 54, 18, 55, 9, 21, 43, 11, 212, 30];

// -- при помощи метода sort и колбека  отсортировать массив.
// const sort = numbers.sort((a, b) => a - b);
// console.log(sort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
const sort = numbers.sort((a, b) => b - a);
console.log(sort);

// -- при помощи filter получить числа кратные 3
// const filter = numbers.filter(value => !(value % 3));
// console.log(filter);

// -- при помощи filter получить числа кратные 10
const filter = numbers.filter(value => !(value % 10));
console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
numbers.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
const map = numbers.map(value => value * 3);
console.log(map);

// - создать массив со словами на 15-20 элементов.
const words = ["I-chi", "Ni", "San", "Yon", "Go", "Roku", "Shi-chi", "Ha-chi", "Ku", "Juu", "One", "Two", "Three", "Four", "five"];

// -- отсортировать его по алфавиту в восходящем порядке.
// const sort2 = words.sort( (a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) {
//         return 1;
//     }
//     return -1;
// });
// console.log(sort2)

// -- отсортировать его по алфавиту  в нисходящем порядке.
const sort1 = words.sort( (a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
    }
    return 1;
});
console.log(sort1);

// -- отфильтровать слова длиной менее 4х символов
const filter2 = words.filter(value => value.length < 4);
console.log(filter2);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
const map1 = words.map(value => value += '!');
console.log(map1);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// const sort2 = users.sort((a, b) => a.age - b.age);
// console.log(sort2);

const sort2 = users.sort((a, b) => b.age - a.age);
console.log(sort2);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// const sort3 = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sort3);

const sort3 = users.sort((a, b) => b.name.length - a.name.length);
console.log(sort3);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let users1 = [
    {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// скопіював масив, щоб не закоментовувати попередні сортування які змінили порядок елементів масиву

// const users2 = JSON.parse(JSON.stringify(users1)); //також можна створити копію масиву в змінну, а не джейсонити відразу
const usersNew = JSON.parse(JSON.stringify(users1)).map((value, index) => {
    value.id = index;
    return value;
});

console.log(users1);
console.log(usersNew);

// - відсортувати його за індентифікатором
const sort4 = usersNew.sort((a, b) => b.id - a.id);
console.log(sort4);
// сортую в порядку спадання, бо в порядку зростання він і так з самого початку