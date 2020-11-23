// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".
// const div = document.createElement('div');
// const btn = document.createElement('button');
//
// div.id = 'text';
// div.innerText = 'Element with id = Text';
// btn.innerText = 'Remove element with id = Text';
//
// btn.onclick = () => {
//     div.style.display = 'none';
// }
//
// document.body.appendChild(div);
// document.body.appendChild(btn);

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя. ==============================================
// const btn = document.createElement('button');
//
// btn.innerText = 'Remove this button';
// btn.style.display = 'block';
//
// btn.onclick = () => {
//     btn.style.display = 'none';
// }
//
// document.body.appendChild(btn);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const btn = document.createElement('button');
// const input = document.createElement('input');
//
// btn.innerText = 'Action';
// input.setAttribute('type', 'number');
// input.setAttribute('placeholder', 'Enter your age');
//
// btn.onclick = () => {
//     if (input.value < 18) {
//         alert('You are too young :(');
//     }
// };
//
// document.body.appendChild(input);
// document.body.appendChild(btn);

// - Создайте меню, которое раскрывается/сворачивается при клике =======================================================
// const menuList = document.querySelector('.menu__list');
// const btn = document.querySelector('.menu__title');
//
// btn.style.border = '1px dashed';
// btn.style.cursor = 'pointer';
//
// btn.onclick = () => {
//     menuList.hidden
//         ? menuList.hidden = false
//         : menuList.hidden = true
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//  Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// const comments = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
// ];
//
// comments.forEach(value => {
//     const div = document.createElement('div'),
//         title = document.createElement('div'),
//         body = document.createElement('div'),
//         btn = document.createElement('button');
//
//     title.innerText = `Title: ${value.title}`;
//     body.innerText = `Body: ${value.body}`;
//     btn.innerText = 'Body hide/show';
//
//     btn.onclick = () => {
//         body.hidden
//             ? body.hidden = false
//             : body.hidden = true
//     };
//
//     div.appendChild(title);
//     div.appendChild(body);
//     div.appendChild(btn);
//     document.body.appendChild(div);
// });

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const btn = document.createElement('button'),
//     form1 = document.forms.form1,
//     form2 = document.forms.form2;
//
// btn.innerText = "console.log";
//
// form1.setAttribute('class', 'atr');
// form2.setAttribute('class', 'atr');
// form1.input1.setAttribute('class', 'atr');
// form1.input2.setAttribute('class', 'atr');
// form2.input3.setAttribute('class', 'atr');
// form2.input4.setAttribute('class', 'atr');
//
// btn.onclick = () => {
//     console.log(form1.input1.value);
//     console.log(form1.input2.value);
//     console.log(form2.input3.value);
//     console.log(form2.input4.value);
// };
//
// document.body.appendChild(btn);

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// const tableFather = document.querySelector('.table-father');
//
// function tableCreator(rows, columns, father) {
//     const table = document.createElement('table');
//
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//
//         for (let j = 0; j < columns; j++) {
//             const td = document.createElement('td');
//
//             td.style.border = '1px solid';
//             td.innerText = 'Lorem ipsum';
//             tr.appendChild(td);
//         }
//
//         table.appendChild(tr);
//     }
//
//     father.appendChild(table);
// }
//
// tableCreator(5, 3, tableFather);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// const tableFather = document.querySelector('.table-father'),
//     rowsInput = document.createElement('input'),
//     columnsInput = document.createElement('input'),
//     contentInput = document.createElement('input'),
//     tableBtn = document.createElement('button');
//
// document.body.appendChild(rowsInput);
// document.body.appendChild(columnsInput);
// document.body.appendChild(contentInput);
// document.body.appendChild(tableBtn);
// tableBtn.innerText = 'Generate table';
// rowsInput.setAttribute('placeholder', 'Enter number of rows');
// columnsInput.setAttribute('placeholder', 'Enter number of columns');
// contentInput.setAttribute('placeholder', 'Enter content of cells');
//
// tableBtn.onclick = () => {
//     const table = document.createElement('table');
//
//     for (let i = 0; i < rowsInput.value; i++) {
//         const tr = document.createElement('tr');
//
//         for (let j = 0; j < columnsInput.value; j++) {
//             const td = document.createElement('td');
//
//             td.style.border = '1px solid';
//             td.innerText = contentInput.value;
//             tr.appendChild(td);
//         }
//
//         table.appendChild(tr);
//     }
//
//     tableFather.appendChild(table);
// };

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// const images = [
//     {id: 1, url: 'images/01.jpg'},
//     {id: 2, url: 'images/02.jpg'},
//     {id: 3, url: 'images/03.jpg'}
// ];
//
// const img = document.createElement('img'),
//     btnPrev = document.createElement('button'),
//     btnNext = document.createElement('button');
//
// let index = 0;
//
// img.src = images[index].url;
//
// img.style.height = '300px';
// img.style.width = '400px';
// btnPrev.innerText = 'Previous';
// btnNext.innerText = 'Next';
//
// document.body.appendChild(btnPrev);
// document.body.appendChild(img);
// document.body.appendChild(btnNext);
//
// btnPrev.onclick = () => {
//     index - 1 < 0
//         ? index = images.length - 1
//         : index = index - 1;
//
//     img.src = images[index].url;
// };
//
// btnNext.onclick = () => {
//     index + 1 > images.length - 1
//         ? index = 0
//         : index = index + 1;
//
//     img.src = images[index].url;
// };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const badWords = ['scheisse', 'fotze', 'baka', 'zakkenayo', 'chikushou', 'kusou','shimatta'],
//     input = document.createElement('input'),
//     checker = document.createElement('button');
//
// input.setAttribute('placeholder', 'Enter a word');
// checker.innerText = 'Check';
// document.body.appendChild(input);
// document.body.appendChild(checker);
//
// checker.onclick = () => {
//     badWords.forEach(badWord => {
//        if (input.value.toLowerCase() === badWord) {
//            alert('Не сквернослов!');
//        }
//     });
// };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// const badWords = ['scheisse', 'fotze', 'baka', 'zakkenayo', 'chikushou', 'kusou','shimatta'],
//     input = document.createElement('input'),
//     checker = document.createElement('button');
//
// input.setAttribute('placeholder', 'Enter a sentence');
// checker.innerText = 'Check'
// document.body.appendChild(input);
// document.body.appendChild(checker);
//
// checker.onclick = () => {
//     badWords.forEach(badWord => {
//         if (input.value.toLowerCase().includes(badWord)) {
//             alert('Не сквернослов!');
//         }
//     });
// };

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем
// заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// const titlesArray = document.getElementsByTagName('h2'),
//     menu = document.getElementById('menu'),
//     ul = document.createElement('ul');
//
// for (let i = 0; i < titlesArray.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let anchor = 'anchor' + (i + 1);
//
//     a.href = '#' + anchor;
//     titlesArray[i].setAttribute('id', anchor);
//
//     a.innerHTML = titlesArray[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
//
// document.body.style.display = 'flex';
// menu.appendChild(ul);

// -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// const checkbox1 = document.createElement('input'),
//     checkbox2 = document.createElement('input'),
//     checkbox3 = document.createElement('input'),
//     label1 = document.createElement('label'),
//     label2 = document.createElement('label'),
//     label3 = document.createElement('label'),
//     btn = document.createElement('button');
//
// const users = document.createElement('div');
//
// users.appendChild(arrayOutput(usersWithAddress));
//
// checkbox1.type = 'checkbox';
// checkbox2.type = 'checkbox';
// checkbox3.type = 'checkbox';
//
// label1.innerText = 'Со статусом false';
// label2.innerText = 'Старше 29 лет включительно';
// label3.innerText = 'Город Киев';
// btn.innerText = 'Отфильтровать';
//
// document.body.appendChild(users);
// document.body.appendChild(label1);
// document.body.appendChild(checkbox1);
// document.body.appendChild(label2);
// document.body.appendChild(checkbox2);
// document.body.appendChild(label3);
// document.body.appendChild(checkbox3);
// document.body.appendChild(btn);
//
// btn.onclick = () => {
//     let copyArray = JSON.parse(JSON.stringify(usersWithAddress));
//
//     if (checkbox1.checked) {
//         copyArray = copyArray.filter(value => !value.status)
//     }
//     if (checkbox2.checked) {
//         copyArray = copyArray.filter(value => value.age >= 29)
//     }
//     if (checkbox3.checked) {
//         copyArray = copyArray.filter(value => value.address.city === 'Kyiv')
//     }
//
//     users.innerHTML = '';
//     users.appendChild(arrayOutput(copyArray));
// };
//
// function arrayOutput(array) {
//     const main = document.createElement('div');
//
//     array.forEach(value => {
//         const div = document.createElement('div');
//
//         div.innerHTML = JSON.stringify(value);
//         main.appendChild(div);
//     });
//
//     document.body.appendChild(main);
//
//     return main;
// }