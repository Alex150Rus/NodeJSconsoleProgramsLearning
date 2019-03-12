const promise = new Promise((resolve, reject) => {
    /* здесь может быть любая асинхронная функция: ajax запрос, обработка файла, 
    трансформация картинки, чтение из БД. Когда прямо сейчас результат недоступен, 
    а за ним нужно куда-то сходить, посчитать его долго... */
    setTimeout(
        () => resolve(), 1000)
});

// дожидается перехода промиса в состояние resolve или rejected
promise.then(
    () => console.log('я дождался перехода промиса в конечное состояние успешного выполнения Fullfilled'),
    () => console.log('что-то пошло не так - Rejected')
)

const promise2 = new Promise((resolve, reject) => {
    setTimeout(
        () => resolve({
            name: 'Sasha'
        }), 1000)
});

// дожидается перехода промиса в состояние resolve или rejected
promise2.then(
        (user) => {
            console.log(`${user.name}, я дождался перехода промиса в конечное состояние успешного выполнения Fullfilled`
            )
            user.age = 37;
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(user), 1000)
            })
        },
        () =>
        console.log('что-то пошло не так - Rejected')
    )
    .then(
        (user) => {
            user.age = 25
            console.log(user)
        }
    )

    async function foo() {
         // с помощью await можно дожидаться результата либо промиса, либо асинхронной функции
        const user = await promise2;
        console.log(`asinc await ${user.age}`)
    }

    foo();