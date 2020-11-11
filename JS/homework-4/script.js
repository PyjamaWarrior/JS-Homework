// - створити функцію яка виводить масив ===============================================================================
function printArray(array) {
    console.log(array);
}

printArray([1, 2, 3, 4, 5]);
console.log('===================================================')

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function randomizer(length, max, min) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.round(Math.random() * (max - min) + min));
    }

    return randomArray;
}

console.log(randomizer(10, 10, 1));
console.log('===================================================')

// - створити функцію яка приймає три числа та виводить та повертає найменьше. =========================================
function printMin(a, b, c) {
    let min = a;

    if (b <= a && b <= c) min = b;
    if (c <= a && c <= b) min = c;

    console.log('Min:', min);
    return min;
}

printMin(8, 2, 6);
console.log('===================================================')

// - створити функцію яка приймає три числа та виводить та повертає найбільше. =========================================
function printMax(a, b, c) {
    let max = a;

    if (b >= a && b >= c) max = b;
    if (c >= a && c >= b) max = c;

    console.log('Max:', max);
    return max;
}

printMax(8, 2, 8);
console.log('===================================================')

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше ===================
function printMaxReturnMin() {
    let min = arguments[0];
    let max = arguments[0];

    for (const argument of arguments) {
        if (argument < min) min = argument;
        if (argument > max) max = argument;
    }

    console.log('Max:', max);
    return min;
}

printMaxReturnMin(8, 2, 6, 1, 9, 10);
console.log('===================================================')

// - створити функцію яка повертає найбільше число з масиву ============================================================
function returnMax(array) {
    let max = array[0];

    for (const element of array) {
        if (element > max) max = element;
    }

    return max;
}

console.log('Max:',returnMax([1, 4, 2, 1, 7, 4, 9]));
console.log('===================================================')

// - створити функцію яка повертає найменьше число з масиву ============================================================
function returnMin(array) {
    let min = array[0];

    for (const element of array) {
        if (element < min) min = element;
    }

    return min;
}

console.log('Min:', returnMin([1, 4, 2, 1, 7, 4, 9]));
console.log('===================================================')

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його. ===================
function arrayAmount(array) {
    let sum = 0;

    for (const element of array) {
        sum += element;
    }

    return sum;
}

console.log('Amount:', arrayAmount([1, 5, 2, 8, 1]));
console.log('===================================================');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. ============================
function arrayAverage(array) {
    let sum = 0;

    for (const element of array) {
        sum += element;
    }

    return sum / array.length;
}

console.log('Average: ', arrayAverage([1, 5, 2, 8, 1]));
console.log('===================================================');

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві ===========
function returnCount(array) {
    let count = 0;

    for (const element of array) {
        if (typeof element === 'object' && !Array.isArray(element)) {
            count++;
        }
    }

    return count;
}

console.log('Count:', returnCount([{name: 'ivan', age: 18}, {name: 'stepan', age: 18}, {name: 'roman', age: 18}]));
console.log('===================================================');

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них ==================
function returnFieldsCount(array) {
    let count = 0;

    for (const element of array) {
        if (typeof element === 'object' && !Array.isArray(element)) {
            for (const key in element) {
                count++;
            }
        }
    }

    return count;
}

console.log('Fields:', returnFieldsCount([{name: 'ivan', age: 18}, {name: 'stepan', age: 18}, {name: 'roman', age: 18}]));
console.log('===================================================');

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив. ===
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function returnAmountSameIndex(array1, array2) {
    let resultArray = [];

    for (let i = 0; i < array1.length; i++) {
        resultArray.push(array1[i] + array2[i]);
    }

    return resultArray;
}

console.log(returnAmountSameIndex([1, 2, 3, 4], [2, 3, 4, 5]));
console.log('===================================================');

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1" ===================
function changeElements(array, i) {

    if (i < array.length) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    }

    return array;
}

console.log(changeElements([1, 2, 3, 4], 1));
console.log('===================================================');

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок
// не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
function sortZero(array) {
    for (let i = array.length -1; i >= 0; i--) {
        if (array[i] === 0) {
            array.splice(i, 1);
            array.push(0);
        }
    }

    return array;
}

console.log(sortZero([1,0,6,0,3]));
console.log(sortZero([0,1,2,3,4]));
console.log(sortZero([0,0,1,0]));
console.log('===================================================');

// Створити функцію яка : ==============================================================================================
// - Додає в боді блок з текстом "Hello owu" ===========================================================================
function addDiv() {
    const block = document.createElement('div');
    block.innerText = 'Hello owu';
    document.body.appendChild(block);
}

addDiv();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи ===================================
function addBlock(tag, text) {
    const block = document.createElement(tag);
    block.innerText = text;
    document.body.appendChild(block);
}

addBlock('p', 'Mada ka na');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список
// цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
function addCarsList(array, id) {
    const block = document.getElementById(id);

    for (const element of array) {
        const div = document.createElement('div');
        div.innerHTML = `<div>${element.model}</div> <div>${element.year}</div> <div>${element.hp}</div> <div>${element.color}</div>`;
        block.appendChild(div);
    }
}

addCarsList(
    [{model: 'Mustang', year: 2001, hp: 400, color: 'red'},
    {model: 'Challenger', year: 2002, hp: 700, color: 'black'},
    {model: 'Barracuda', year: 2003, hp: 500, color: 'silver'},
    {model: 'Hemi Cuda', year: 2004, hp: 450, color: 'neonGreen'},
    {model: 'Camaro', year: 2005, hp: 355, color: 'brown'},
    {model: 'Carrera GT', year: 2006, hp: 800, color: 'blue'},
    {model: '918', year: 2007, hp: 350, color: 'yellow'},
    {model: '911', year: 2008, hp: 600, color: 'green'},
    {model: 'Megane RS', year: 2009, hp: 300, color: 'white'},
    {model: 'Clio RS', year: 2010, hp: 250, color: 'black'}],
    'cars');
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними
// "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
function concat(usersWithId, citiesWithId) {
    for (const users of usersWithId) {
        for (const cities of citiesWithId) {
            if (users.id === cities.user_id) {
                users.address = cities;
            }
        }
    }

    return usersWithId;
}

console.log(concat(
    [{id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}],
    [{user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}]
    ));

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

function fightClub() {
    const wrap = document.createElement('div');

    wrap.id = 'wrap';

    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        const div = document.createElement('div');

        div.className = `rules rule${i + 1}`;
        div.innerHTML = `<h2>${rule.title}</h2><p>${rule.body}</p>`;

        wrap.appendChild(div);
    }

    document.body.appendChild(wrap);
}

fightClub();