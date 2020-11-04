// -- створити об'єкт (не меньше 5ти властивостей) який описує =========================================================
// - собаку
const objectDog = {
    nickname: 'Gus',
    fleas: true,
    color: 'white',
    stupid: false,
    paws: 4
}

console.log(objectDog);
console.log('===============================');
// - людину
const objectMan = {
    name: 'Tutankhamen',
    age: 3361,
    nationality: 'egyptian',
    position: 'pharaoh',
    status: 'died'
}

console.log(objectMan);
console.log('===============================');
// - автомобіль
const objectCar = {
    brand: 'Dodge',
    model: 'Challenger',
    specification: 'SRT Hellcat Redeye',
    hp: 797,
    engine: 'supercharged 6.2L V8'
};

console.log(objectCar);
console.log('===============================');
// - квартиру
const objectApartment = {
    rooms: 3,
    windows: 5,
    bathrooms: 1,
    kitchens: 1,
    crazyNeighborhoods: 2
};

console.log(objectApartment);
console.log('===============================');
// - книгу
const objectBook = {
    pages: 384,
    genre: 'phantasy',
    interesting: true,
    author: 'Andrzej Sapkowski',
    title: 'Season of Storms'
};

console.log(objectBook);
console.log('===============================');
// -- Створити масив та вивести його в консоль: ========================================================================
// - з 5 собак
const arrayDogs = ['Doberman', 'Pug', 'Basset Hound', 'German Shepherd', 'Rottweiler'];

console.log(arrayDogs);
console.log('===============================');
// - 3 5 людей
const arrayPeoples = ['Anna', 'Mykola', 'Nazar', 'Olha', 'Danylo'];

console.log(arrayPeoples);
console.log('===============================');
// - з 5 автомобілів
const arrayCars = ['Dodge Challenger', 'Ford Mustang', 'Chevrolet Camaro', 'Plymouth Barracuda', 'Renault Clio'];

console.log(arrayCars);
console.log('===============================');
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
const objectHouse = {
    floors: 3,
    residents: ['Maksym', 'Nazar', 'Olha', 'Danylo'],
    bedRooms: 3,
    color: 'green',
    rooms: {
        bathroom: true,
        kitchen: true,
        livingRoom: true,
        badRoom: true,
    }
};

console.log(objectHouse);
console.log('===============================');
// - водій
const objectDriver = {
    name: 'Nazar',
    car: {
        brand: 'Renault',
        model: 'Clio',
        color: 'black'
    },
    experience: '20 years',
    carsBefore: 5,
    passengers: ['Maksym', 'Olha', 'Danylo']
};

console.log(objectDriver);
console.log('===============================');
// - іграшку
const objectToy = {
    color: 'white',
    size: {
        width: '20sm',
        height: '20sm'
    },
    owner: 'Stepan',
    properties: ['solid', 'not liquid'],
    ugly: false
};

console.log(objectToy);
console.log('===============================');
// - стіл
const objectTable = {
    color: 'brown',
    materials: ['wood', 'plastic', 'steel'],
    beautiful: true,
    parts: {
        supports: true,
        topHorizon: true,
        bottomHorizon: false
    },
    clean: false
};

console.log(objectTable);
console.log('===============================');
// - сумка
const objectBag = {
    materials: ['Leather', 'Steel', 'Leather substitute'],
    size: {
        width: '20sm',
        height: '10sm'
    },
    color: 'green',
    lock: true,
    owner: false
};

console.log(objectBag);
console.log('===============================');
// Дан массив: =========================================================================================================
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
console.log(users[7].status);

// - статус Максима
console.log(users[4].status);

// ім'я передостаннього об'єкту
console.log(users[9].name);

// - ім'я третього об'єкта
console.log(users[2].name);

// - вік Олега
console.log(users[6].age);

// - вік Олі
console.log(users[9].age);

// - вік + ім'я 5го об'єкта
console.log(users[4].name, users[4].age);

// - вік + сатус Анни
console.log(users[5].age, users[5].status);

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let content = document.getElementById('content');

// - отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');

// замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Not lorem not ipsum not dolor not sit not amet.';

// - замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Первое правило бобового клуба: не рассказывать о бобовом клубе. Второе правило бобового клуба: ' +
    'никогда не рассказывать о бобовом клубе.';

// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
let allElements = document.body.getElementsByTagName('*');

for (const tag of allElements) {
    tag.style.backgroundColor = 'red';
    tag.style.color = 'blue';
}

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
rulesClasses = rules.getAttribute('class');
console.log(rulesClasses);

// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName('fc_rules');

for (const element of fcRules) {
    element.style.color = 'red';
}