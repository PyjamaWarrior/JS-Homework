// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// function Tags(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// const a = new Tags('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания с' +
//     'сылок. ' + 'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем ' +
//     'называется ' + 'закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, ' +
//     'которая указывает ' + 'на якорь, происходит переход к закладке внутри веб-страницы.',
//     [{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//         {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'}]
// );
//
// const div = new Tags('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения ' +
//     'фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. ' +
//     'Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега ' +
//     'добавить атрибут class или id с именем селектора.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//         {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]
// );
//
// const h1 = new Tags('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают ' +
//     'относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный ' +
//     'заголовок первого уровня.', [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}]
// );
//
// const span = new Tags('span', 'Тег <span> предназначен для определения строчных элементов документа.',
//     [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'},
//         {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}]
// );
//
// const input = new Tags('input', 'Тег <input> является одним из разносторонних элементов формы и ' +
//     'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
//         {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'}]
// );
//
// const form = new Tags('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для ' +
//     'обмена данными между пользователем и сервером.',
//     [{titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//         {titleOfAttr: 'enctype', actionOfAttr: 'Способ кодирования данных формы.'}]
// );
//
// const option = new Tags('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с ' +
//     'помощью контейнера <select>.',
//     [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//         {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'}]
// );
//
// const select = new Tags('select', 'Тег <select> позволяет создать элемент интерфейса в виде ' +
//     'раскрывающегося списка, а также список с одним или множественным выбором.',
//     [{titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
//         {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'}]
// );
//
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);

// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
class Tags {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

const a = new Tags('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания с' +
    'сылок. ' + 'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем ' +
    'называется ' + 'закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, ' +
    'которая указывает ' + 'на якорь, происходит переход к закладке внутри веб-страницы.',
    [{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
        {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'}]
);

const div = new Tags('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения ' +
    'фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. ' +
    'Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега ' +
    'добавить атрибут class или id с именем селектора.',
    [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]
);

const h1 = new Tags('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают ' +
    'относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный ' +
    'заголовок первого уровня.', [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}]
);

const span = new Tags('span', 'Тег <span> предназначен для определения строчных элементов документа.',
    [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'},
        {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}]
);

const input = new Tags('input', 'Тег <input> является одним из разносторонних элементов формы и ' +
    'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
        {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'}]
);

const form = new Tags('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для ' +
    'обмена данными между пользователем и сервером.',
    [{titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
        {titleOfAttr: 'enctype', actionOfAttr: 'Способ кодирования данных формы.'}]
);

const option = new Tags('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с ' +
    'помощью контейнера <select>.',
    [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
        {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'}]
);

const select = new Tags('select', 'Тег <select> позволяет создать элемент интерфейса в виде ' +
    'раскрывающегося списка, а также список с одним или множественным выбором.',
    [{titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
        {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'}]
);

console.log(a);
console.log(div);
console.log(h1);
console.log(span);
console.log(input);
console.log(form);
console.log(option);
console.log(select);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в
// об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
const car = {
    model: 'Clio',
    manufacturer: 'Renault',
    year: 2014,
    maxSpeed: 178,
    engineCapacity: 1461,
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    },
    info: function () {
        console.log(
            `Model: ${this.model};\nManufacturer: ${this.manufacturer};\nYear: ${this.year};\nMax Speed: ${this.maxSpeed};\nEngine Capacity: ${this.engineCapacity};`
        );
    },
    increaseMaxSpeed: function (newSpeed) {
        console.log('Before:', this.maxSpeed);
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log('After:',this.maxSpeed);
    },
    changeYear: function (newValue) {
        console.log('Before:', this.year);
        this.year = newValue;
        console.log('After:',this.year);
    },
    addDriver: function (driver) {
        this.driver = driver;
    }
};

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2015);
car.addDriver({name: 'Nazar', age: 39});
console.log(car.driver);
console.log('======================================================')

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Cars1(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`);
    };
    this.info = function () {
        console.log(
            `Model: ${this.model};\nManufacturer: ${this.manufacturer};\nYear: ${this.year};\nMax Speed: ${this.maxSpeed};\nEngine Capacity: ${this.engineCapacity};`
        );
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log('Before:', this.maxSpeed);
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log('After:',this.maxSpeed);
    };
    this.changeYear = function (newValue) {
        console.log('Before:', this.year);
        this.year = newValue;
        console.log('After:',this.year);
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const clio1 = new Cars1('Clio', 'Renault', 2014, 178, 1461);

clio1.drive();
clio1.info();
clio1.increaseMaxSpeed(100);
clio1.changeYear(2015);
clio1.addDriver({name: 'Nazar', age: 39});
console.log(clio1.driver);
console.log('======================================================')

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Cars2 {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    };

    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    info () {
        console.log(
            `Model: ${this.model};\nManufacturer: ${this.manufacturer};\nYear: ${this.year};\nMax Speed: ${this.maxSpeed};\nEngine Capacity: ${this.engineCapacity};`
        );
    };
    increaseMaxSpeed (newSpeed) {
        console.log('Before:', this.maxSpeed);
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log('After:',this.maxSpeed);
    };
    changeYear (newValue) {
        console.log('Before:', this.year);
        this.year = newValue;
        console.log('After:',this.year);
    };
    addDriver (driver) {
        this.driver = driver;
    }
}

const clio2 = new Cars2('Clio', 'Renault', 2014, 178, 1461);

clio2.drive();
clio2.info();
clio2.increaseMaxSpeed(100);
clio2.changeYear(2015);
clio2.addDriver({name: 'Nazar', age: 39});
console.log(clio2.driver);
console.log('======================================================')

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Cinderella1 {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderella1 = new Cinderella1('Ichika', 21, 38),
    cinderella2 = new Cinderella1('Ni', 22, 39),
    cinderella3 = new Cinderella1('San', 23, 37),
    cinderella4 = new Cinderella1('Shi', 24, 36),
    cinderella5 = new Cinderella1('Go', 25, 35),
    cinderella6 = new Cinderella1('Roku', 26, 34),
    cinderella7 = new Cinderella1('Shi-chi', 27, 40),
    cinderella8 = new Cinderella1('Ha-chi', 28, 41),
    cinderella9 = new Cinderella1('Ku', 29, 42),
    cinderella10 = new Cinderella1('Juu', 30, 43);

const array1 = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8,
    cinderella9, cinderella10];

class Prince1 {
    constructor(name, age, slipperSize) {
        this.name = name;
        this.age = age;
        this.slipperSize = slipperSize;
    }
}

const prince1 = new Prince1('Tom Riddle', 21, 38);

for (const cinderella of array1) {
    if (cinderella.footSize === prince1.slipperSize) {
        console.log(`${cinderella.name} + ${prince1.name} = 愛する`);
    }
}

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Cinderella2(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

const cinderella11 = new Cinderella2('Ichika', 21, 38),
    cinderella12 = new Cinderella2('Ni', 22, 39),
    cinderella13 = new Cinderella2('San', 23, 37),
    cinderella14 = new Cinderella2('Shi', 24, 36),
    cinderella15 = new Cinderella2('Go', 25, 35),
    cinderella16 = new Cinderella2('Roku', 26, 34),
    cinderella17 = new Cinderella2('Shi-chi', 27, 40),
    cinderella18 = new Cinderella2('Ha-chi', 28, 41),
    cinderella19 = new Cinderella2('Ku', 29, 42),
    cinderella20 = new Cinderella2('Juu', 30, 43);

const array2 = [cinderella11, cinderella12, cinderella13, cinderella14, cinderella15, cinderella16, cinderella17,
    cinderella18, cinderella19, cinderella20];

function Prince2(name, age, slipperSize) {
    this.name = name;
    this.age = age;
    this.slipperSize = slipperSize;

    this.finder = function (cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.footSize === this.slipperSize) {
                console.log(`${cinderella.name} + ${this.name} = 愛する`);
            }
        }
    }
}

const prince2 = new Prince2('Tom Riddle', 21, 38);

prince2.finder(array2);