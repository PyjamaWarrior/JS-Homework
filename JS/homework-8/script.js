// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const textarea = document.getElementById('textarea');
// textarea.value = localStorage.getItem('text');
//
// textarea.oninput = () => {
//     localStorage.setItem('text', textarea.value);
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// const form1 = document.forms.form1;
// const obj = JSON.parse(localStorage.getItem('form'));
//
// form1.oninput = () => {
//     const obj = {};
//
//     for (const element of form1) {
//         if (element.type === 'checkbox' || element.type === 'radio') {
//             if (element.checked) {
//                 obj[element.name] = element.value;
//             }
//         } else {
//             obj[element.name] = element.value;
//         }
//     }
//
//     localStorage.setItem('form', JSON.stringify(obj));
// }
//
// for (const key in obj) {
//     form1[key].value = obj[key];
//
//     if (form1[key].value === 'on') {
//         form1[key].checked = true
//     }
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем
// поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// const textarea = document.getElementById('textarea'),
//     prev = document.getElementById('prev'),
//     next = document.getElementById('next'),
//     save = document.getElementById('save');
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, textarea.value);
// }
//
// prev.onclick = () => {
//     let index;
//
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textarea.value) {
//                 index = key;
//             }
//         }
//     }
//
//     if (index === '1') {
//         prev.style.visibility = 'hidden';
//         return;
//     }
//
//     textarea.value = localStorage.getItem(index - 1);
//     next.style.visibility = 'visible';
// }
//
// next.onclick = () => {
//     let index;
//
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textarea.value) {
//                 index = key;
//             }
//         }
//     }
//
//     if (index === localStorage.length.toString()) {
//         next.style.visibility = 'hidden';
//         return;
//     }
//
//     textarea.value = localStorage.getItem(+index + 1);
//     prev.style.visibility = 'visible';
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все
// необходимые инпуты для редактирования, которые уже заполнены данными объекта
// const form2 = document.forms.form2;
// const submit1 = form2.submit1;
// let tempUser = {};
//
// submit1.onclick = () => {
//     const user = {...tempUser};
//     tempUser = {};
//
//     for (const element of form2) {
//         if (element.name && element.type !== 'submit') {
//             user[element.name] = element.value;
//         }
//     }
//
//     if (!user.id) {
//         user.id = new Date().getTime();
//     }
//     setUserToLocalSt(user)
// }
//
// function setUserToLocalSt(user) {
//     if (localStorage.hasOwnProperty('Users_Array')) {
//         const arrayUsers = JSON.parse(localStorage.getItem('Users_Array'));
//         const find = arrayUsers.find(value => value.id === user.id);
//
//         if (find) {
//             const filter = arrayUsers.filter(value => value.id !== user.id);
//             filter.push(user);
//             localStorage.setItem('Users_Array', JSON.stringify(filter))
//
//         } else {
//             arrayUsers.push(user);
//             localStorage.setItem('Users_Array', JSON.stringify(arrayUsers))
//         }
//     } else {
//         localStorage.setItem('Users_Array', JSON.stringify([user]))
//     }
// }
//
// function getUserFromLocalSt() {
//     if (localStorage.hasOwnProperty('Users_Array')) {
//         const parsed = JSON.parse(localStorage.getItem('Users_Array'));
//
//         for (const user of parsed) {
//             document.body.appendChild(createUserDiv(user))
//         }
//     }
// }
//
// getUserFromLocalSt();
//
// function createUserDiv(user) {
//     const main = document.createElement('div'),
//         edit = document.createElement('button'),
//         remove = document.createElement('button');
//
//     for (const key in user) {
//         const div = document.createElement('div');
//
//         div.innerText = `${key}: ${user[key]}`;
//         main.appendChild(div);
//     }
//
//     main.style.border = '1px solid';
//     edit.innerText = 'Edit';
//     remove.innerText = 'Remove';
//
//     edit.onclick = () => {
//         editUser(user.id)
//     }
//
//     remove.onclick = () => {
//         deleteUser(user.id)
//     }
//
//     main.appendChild(edit);
//     main.appendChild(remove);
//
//     return main
// }
//
// function deleteUser(id) {
//   const parsed = JSON.parse(localStorage.getItem('Users_Array'));
//   const filter = parsed.filter(value => value.id !== id);
//
//   localStorage.setItem('Users_Array', JSON.stringify(filter));
//   location.reload()
// }
//
// function editUser(id) {
//     const parsed = JSON.parse(localStorage.getItem('Users_Array'));
//     const user = parsed.find(value => value.id === id);
//
//     for (const element of form2) {
//         if (element.name && element.type !== 'submit') {
//             for (const key in user) {
//                 if (element.name === key) {
//                     element.value = user[key]
//                 }
//             }
//         }
//     }
//
//     tempUser = user
// }