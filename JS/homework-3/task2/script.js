// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
const objectDog = {
    nickname: 'Gus',
    fleas: true,
    color: 'white',
}
const objectMan = {
    name: 'Tutankhamen',
    age: 3361,
    nationality: 'egyptian',
}
const objectCar = {
    brand: 'Dodge',
    model: 'Challenger',
    specification: 'SRT Hellcat Redeye',
};
const objectApartment = {
    rooms: 3,
    windows: 5,
    doors: 6
};
const objectBook = {
    pages: 384,
    author: 'Andrzej Sapkowski',
    title: 'Season of Storms'
};
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
const objectHouse = {
    floors: 3,
    residents: ['Maksym', 'Nazar', 'Olha', 'Danylo'],
    rooms: {
        bathroom: true,
        kitchen: true,
    }
};
const objectDriver = {
    car: {
        brand: 'Renault',
        model: 'Clio',
        color: 'black'
    },
    carsBefore: 5,
    passengers: ['Maksym', 'Olha', 'Danylo']
};
const objectToy = {
    size: {
        width: '20sm',
        height: '20sm'
    },
    properties: ['solid', 'not liquid'],
    ugly: false
};
const objectTable = {
    materials: ['wood', 'plastic', 'steel'],
    parts: {
        supports: true,
        topHorizon: true,
        bottomHorizon: false
    },
    clean: false
};
const objectBanana = {
    color: 'white',
    skills: ['taste', 'take pleasure'],
    neighbourhood: {
        name: 'peach',
        hairy: true
    }
}
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2 ================================================
console.log('objectDog');
for (const key in objectDog) {
    console.log('Key:', key);
}

console.log('objectMan');
for (const key in objectMan) {
    console.log('Key:', key);
}

console.log('objectCar');
for (const key in objectCar) {
    console.log('Key:', key);
}

console.log('objectApartment');
for (const key in objectApartment) {
    console.log('Key:', key);
}

console.log('objectBook');
for (const key in objectBook) {
    console.log('Key:', key);
}

console.log('objectHouse');
for (const key in objectHouse) {
    console.log('Key:', key);
}

console.log('objectDriver');
for (const key in objectDriver) {
    console.log('Key:', key);
}

console.log('objectToy');
for (const key in objectToy) {
    console.log('Key:', key);
}

console.log('objectTable');
for (const key in objectTable) {
    console.log('Key:', key);
}

console.log('objectBanana');
for (const key in objectBanana) {
    console.log('Key:', key);
}

console.log('============================================');
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2 ===========================================
console.log('objectDog');
console.log(Object.keys(objectDog));

console.log('objectMan');
console.log(Object.keys(objectMan));

console.log('objectCar');
console.log(Object.keys(objectCar));

console.log('objectApartment');
console.log(Object.keys(objectApartment));

console.log('objectBook');
console.log(Object.keys(objectBook));

console.log('objectHouse');
console.log(Object.keys(objectHouse));

console.log('objectDriver');
console.log(Object.keys(objectDriver));

console.log('objectToy');
console.log(Object.keys(objectToy));

console.log('objectTable');
console.log(Object.keys(objectTable));

console.log('objectBanana');
console.log(Object.keys(objectBanana));

console.log('============================================');
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
const cars1 = [
    {model: 'Mustang', year: 2001, hp: 400, color: 'red'},
    {model: 'Challenger', year: 2002, hp: 700, color: 'black'},
    {model: 'Barracuda', year: 2003, hp: 500, color: 'silver'},
    {model: 'Hemi Cuda', year: 2004, hp: 450, color: 'neonGreen'},
    {model: 'Camaro', year: 2005, hp: 355, color: 'brown'},
    {model: 'Carrera GT', year: 2006, hp: 800, color: 'blue'},
    {model: '918', year: 2007, hp: 350, color: 'yellow'},
    {model: '911', year: 2008, hp: 600, color: 'green'},
    {model: 'Megane RS', year: 2009, hp: 300, color: 'white'},
    {model: 'Clio RS', year: 2010, hp: 250, color: 'black'},
];
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
const cities = [
    {name: 'Dori', population: 95954458, country: 'Mantire', region: 'I-chi'},
    {name: 'Me', population: 4563463, country: 'Mo', region: 'Ni'},
    {name: 'Interimo', population: 455454, country: 'Lorem', region: 'San'},
    {name: 'Adapare', population: 5345345, country: 'Ipsum', region: 'Shi'},
    {name: 'Ameno', population: 5334433, country: 'Dolor', region: 'Go'},
    {name: 'Oma', population: 235545, country: 'Sit', region: 'Ro-ku'},
    {name: 'Nare', population: 243223, country: 'Amet', region: 'Shi-chi'},
    {name: 'Imperavi', population: 4554352, country: 'Hayabusa', region: 'Ha-chi'},
    {name: 'Dimene', population: 243423, country: 'Hayasaka', region: 'Ku'},
    {name: 'Mantiro', population: 534632, country: 'Hajime', region: 'Jyuu'},
];
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
const cars2 = [
    {
        model: 'Mustang', year: 2001, hp: 400, color: 'red',
        driver: {name: 'Ivan', age: 34, gender: 'male', experience: 34}
    },
    {
        model: 'Challenger', year: 2002, hp: 700, color: 'black',
        driver: {name: 'Stepan', age: 53, gender: 'female', experience: 46}
    },
    {
        model: 'Barracuda', year: 2003, hp: 500, color: 'silver',
        driver: {name: 'Gkawkd', age: 23, gender: 'male', experience: 57}
    },
    {
        model: 'Hemi Cuda', year: 2004, hp: 450, color: 'neonGreen',
        driver: {name: 'Fafawf', age: 223, gender: 'female', experience: 345}
    },
    {
        model: 'Camaro', year: 2005, hp: 355, color: 'brown',
        driver: {name: 'Dwfafawd', age: 45, gender: 'male', experience: 234}
    },
    {
        model: 'Carrera GT', year: 2006, hp: 800, color: 'blue',
        driver: {name: 'Fwakfka', age: 87, gender: 'female', experience: 32}
    },
    {
        model: '918', year: 2007, hp: 350, color: 'yellow',
        driver: {name: 'Fafada', age: 423, gender: 'male', experience: 2346}
    },
    {
        model: '911', year: 2008, hp: 600, color: 'green',
        driver: {name: 'Gkwadajw', age: 76, gender: 'female', experience: 242}
    },
    {
        model: 'Megane RS', year: 2009, hp: 300, color: 'white',
        driver: {name: 'Jafnan', age: 66, gender: 'male', experience: 6454}
    },
    {
        model: 'Clio RS', year: 2010, hp: 250, color: 'black',
        driver: {name: 'Oaewkdawmf', age: 27, gender: 'female', experience: 2342}
    },
];
// - проитерировать каждый массив из задания 5,6,7 при помощи while. ===================================================
let i = 0;
while (i < cars1.length) {
    console.log(cars1[i]);
    i++;
}
console.log('============================================');

let j = 0;
while (j < cities.length) {
    console.log(cities[j]);
    j++;
}
console.log('============================================');

let k = 0;
while (k < cars2.length) {
    console.log(cars2[k]);
    k++;
}
console.log('============================================');
// - проитерировать каждый массив из задания 5,6,7 при помощи for . ====================================================
for (let i = 0; i < cars1.length; i++) {
    console.log(cars1[i]);
}
console.log('============================================');

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
console.log('============================================');

for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i]);
}
console.log('============================================');
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of. =================================================
for (const element of cars1) {
    console.log(element);
}
console.log('============================================');

for (const element of cities) {
    console.log(element);
}
console.log('============================================');

for (const element of cars2) {
    console.log(element);
}
console.log('============================================');
// - взять объекты из задания 1 и превратить каждый в json. ============================================================
const jsonDog = JSON.stringify(objectDog);
const jsonMan = JSON.stringify(objectMan);
const jsonCar = JSON.stringify(objectCar);
const jsonApartment = JSON.stringify(objectApartment);
const jsonBook = JSON.stringify(objectBook);
// - взять json из задания 11 и превратить их обратно в объекты. =======================================================
const objectDogCloned = JSON.parse(jsonDog);
const objectManCloned = JSON.parse(jsonMan);
const objectCarCloned = JSON.parse(jsonCar);
const objectApartmentCloned = JSON.parse(jsonApartment);
const objectBookCloned = JSON.parse(jsonBook);
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json. ======================================
for (const element of cars1) {
    console.log(JSON.stringify(element));
}
console.log('============================================');
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json. ======================================
for (const element of cities) {
    console.log(JSON.stringify(element));
}
console.log('============================================');
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив. ===
let newArray1 = [];
for (const element of cars2) {
    newArray1.push(JSON.stringify(element));
}
console.log(newArray1);
console.log('============================================');
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let users1 = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
];

for (const user of users1) {
    console.log('User:', user.name);
    for (const skill of user.skills) {
        console.log('Skill:', skill);
    }
}
console.log('============================================');
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills
// всех пользователей в отедльный массив
let newArray2 = [];
for (const user of users1) {
    for (const skill of user.skills) {
        newArray2.push('Skill: ' + skill);
    }
}
console.log(newArray2);
console.log('============================================');
// - З масиву users2 за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let users2 = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

let newArray3 = [];

for (const element of users2) {
    newArray3.push(element.address);
}

console.log(newArray3);
console.log('============================================');
// - За допомоги циклу проітерувати  масив users2, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
for (const element of users2) {
    let div = document.createElement('div');

    div.innerHTML = `<div>${element.name} ${element.age} ${element.status} ${element.address.city} ${element.address.country} ${element.address.street} ${element.address.houseNumber}</div>`;

    document.body.appendChild(div);
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
for (const element of users2) {
    let div = document.createElement('div');

    div.innerHTML = `<div>${element.name}</div> <div>${element.age}</div> <div>${element.status}</div> <div>${element.address.city} ${element.address.country} ${element.address.street} ${element.address.houseNumber}</div>`;

    document.body.appendChild(div);
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const element of users2) {
    let div = document.createElement('div');

    div.innerHTML = `<div>${element.name}</div> <div>${element.age}</div> <div>${element.status}</div> <div> <div>${element.address.city}</div> <div>${element.address.country}</div> <div>${element.address.street}</div> <div>${element.address.houseNumber}</div></div>`;

    document.body.appendChild(div);
}
// - Дано 2 масиви з рівною кількістю об'єктів. ========================================================================
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
for (const users of usersWithId) {
    for (const cities of citiesWithId) {
        if (users.id === cities.user_id) {
            users.address = cities;
        }
    }
}
console.log(usersWithId);
console.log('============================================');
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та
// тегу
let content = document.getElementById('content');
let className = document.getElementsByClassName('className');
let tagB = document.getElementsByTagName('b');
// - змінити цей текст використовуючи селектори id, class,  tag ========================================================
tagB.innerText = 'I-chi, Ni, San';
className.innerText = 'I-chi, Ni, San, Shi, Go, Ro-ku';
content.innerText = 'I-chi, Ni, San, Shi, Go, Ro-ku, Shi-chi, Ha-chi, Ku, Jyuu';
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag ===========================================
for (const element of tagB) {
    element.style.display = 'block'
    element.style.width = '200px';
    element.style.height = '200px';
}
for (const element of className) {
    element.style.width = '300px';
    element.style.height = '300px';
}

content.style.width = '400px';
content.style.height = '400px';
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені =========
const table1 = document.createElement('table');
const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

table1.appendChild(tr);
document.body.appendChild(table1);
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
const table2 = document.createElement('table');

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');

    for (let i = 0; i < 5; i++) {
        const td = document.createElement('td')
        tr.appendChild(td);
    }
    table2.appendChild(tr);
}

document.body.appendChild(table2);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt
const table3 = document.createElement('table');
let n = prompt('Enter n','5');
let m = prompt('Enter m:', '3');

for (let i = 0; i < n; i++) {
    const tr = document.createElement('tr');

    for (let i = 0; i < m; i++) {
        const td = document.createElement('td')
        tr.appendChild(td);
    }
    table3.appendChild(tr);
}

document.body.appendChild(table3);
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні
// доступи та дії
// - знайти всі елементі, які мають class
const allTags = document.getElementsByTagName('*');

for (const tag of allTags) {
    if (tag.getAttribute('class')) {
        console.log(tag);
    }
}
console.log('============================================');
// - знайти всі параграфи ,та змінити текст на hello oktenweb! =========================================================
const paragraphs = document.getElementsByTagName('p');

for (const element of paragraphs) {
    element.innerText = 'hello oktenweb!';
}
console.log('============================================');
// - знайти всі div та змінити ім колір на червоний ====================================================================
const blocks = document.getElementsByTagName('div');

for (const element of blocks) {
    element.style.color = 'red';
}