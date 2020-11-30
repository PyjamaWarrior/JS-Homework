// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.
// let en = 100;
//
// function messenger(message, en) {
//     console.log(message);
//     console.log(`Залишилось ${en} одиниць енергії.`);
//     console.log('=============================')
// }
//
// function randomizer() {
//     const min = 100;
//     const max = 1000;
//
//     return Math.round(Math.random() * (max - min) + min)
// }
//
// function awake(en, cb) {
//     setTimeout(() => {
//         en += 50;
//
//         if (en <= 0) {
//             cb('Помер у ві сні', en);
//             return;
//         }
//
//         messenger('Прокинувся', en);
//         cb(null, en)
//     }, randomizer());
// }
//
// function goToKitchen(en, cb) {
//     setTimeout( () => {
//         en -= 45;
//
//         if (en <= 0) {
//             cb('Помер не дійшовши до кухні', en);
//             return;
//         }
//
//         messenger('Успішно дійшов до кухні', en);
//         cb(null, en)
//     }, randomizer());
// }
//
// function eat(en, cb) {
//     setTimeout( () => {
//        en += 20;
//
//         messenger('Поїв', en);
//         cb(null, en)
//     }, randomizer());
// }
//
// function goToLivingRoom(en, cb) {
//     setTimeout( () => {
//         en -= 45;
//
//         if (en <= 0) {
//             cb('Помер не дійшовши до вітальні', en);
//             return;
//         }
//
//         messenger('Успішно дійшов до вітальні', en);
//         cb(null, en)
//     }, randomizer());
// }
//
// function goToLBadRoom(en, cb) {
//     setTimeout( () => {
//         en -= 45;
//
//         if (en <= 0) {
//             cb('Помер не дійшовши до спальні', en);
//             return;
//         }
//
//         messenger('Успішно дійшов до спальні', en);
//         cb(null, en)
//     }, randomizer());
// }
//
// function sleep(en, cb) {
//     setTimeout( () => {
//         en = 100;
//
//         messenger('Успішно ліг спати', en);
//         cb(null, en)
//     }, randomizer());
// }
//
// awake(en, (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     goToKitchen(data, (error, data) => {
//         if (error) {
//             console.log(error);
//             return;
//         }
//         eat(data, (error, data) => {
//             goToLivingRoom(data, (error, data) => {
//                 if (error) {
//                     console.log(error);
//                     return;
//                 }
//                 goToKitchen(data, (error, data) => {
//                     if (error) {
//                         console.log(error);
//                         return;
//                     }
//                     eat(data, (error, data) => {
//                         goToLBadRoom(data, (error, data) => {
//                             if (error) {
//                                 console.log(error);
//                                 return;
//                             }
//                             sleep(data, (error, data) => {})
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// =====================================================================================================================

let energy = 100;

function messenger(message, en) {
    console.log(message);
    console.log(`Залишилось ${en} одиниць енергії.`);
    console.log('===============================')
}

function randomizer() {
    const min = 100;
    const max = 1000;

    return Math.round(Math.random() * (max - min) + min)
}

function awake(en) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            en += 50;

            if (en <= 0) {
                return reject('Помер поки прокидався.');
            }

            messenger('Прокинувся.', en);
            resolve(en);
        }, randomizer())
    })
}

function goToKitchen(en) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            en -= 45;

            if (en <= 0) {
                return reject('Помер поки йшов до кухні.');
            }

            messenger('Прийшов до кухні.', en);
            resolve(en);
        }, randomizer())
    })
}

function eat(en) {
    return new Promise((resolve) => {
        setTimeout(() => {
            en += 20;

            messenger('Поїв.', en);
            resolve(en)
        }, randomizer());
    });
}

function goToLivingRoom(en) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            en -= 45;

            if (en <= 0) {
                return reject('Помер поки йшов до вітальні.');
            }

            messenger('Прийшов до вітальні.', en);
            resolve(en);
        }, randomizer())
    })
}

function goToLBadRoom(en) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            en -= 45;

            if (en <= 0) {
                return reject('Помер поки йшов до спальні.');
            }

            messenger('Прийшов до спальні.', en);
            resolve(en);
        }, randomizer())
    })
}

function sleep(en) {
    return new Promise(resolve => {
        setTimeout(() => {
            en = 100;

            messenger('Ліг спати.', en);
            resolve(en)
        }, randomizer());
    })
}

// Promise.chain =======================================================================================================
// awake(energy)
//     .then(value => {
//         return goToKitchen(value)
//     })
//     .then(value => {
//         return eat(value)
//     })
//     .then(value => {
//         return goToLivingRoom(value)
//     })
//     .then(value => {
//         return goToKitchen(value)
//     })
//     .then(value => {
//         return eat(value)
//     })
//     .then(value => {
//         return goToLBadRoom(value)
//     })
//     .then(value => {
//         return sleep(value)
//     })
//     .catch(err => console.log(err))
// Promise.chain =======================================================================================================

// Async await =========================================================================================================
async function cocosinka() {
    try {
        const awake1 = await awake(energy);

        const kitchen1 = await goToKitchen(awake1);

        const eat1 = await eat(kitchen1);;

        const livingRoom = await goToLivingRoom(eat1);

        const kitchen2 = await goToKitchen(livingRoom);

        const eat2 = await eat(kitchen2);

        const badRoom = await goToLBadRoom(eat2);

        const sleep1 = await sleep(badRoom);

    } catch (e) {
        console.log(e)
    }

}

cocosinka()
// Async await =========================================================================================================
