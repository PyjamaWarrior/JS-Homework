// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
const str = 'Hello World';

function randomizer() {
    const min = 100;
    const max = 1000;

    return Math.round(Math.random() * (max - min) + min)
}

function writer() {
    return new Promise((resolve) => {
        setTimeout(resolve, randomizer());
    })
}

async function delayedWrite(item) {
    await writer();
    document.write(item);
}

async function processArray(array) {
    for (const item of array) {
        await delayedWrite(item);
    }
}

processArray([...str]);