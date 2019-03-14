const readline = require('readline');

//во-первых нужно создать интерфейс

const rl = readline.createInterface({
    //указываем откуда брать входные данные
    input: process.stdin,
    // указываем куда писать (может быть файл, а может быть консоль)
    output: process.stdout
});

//прослушивать события ввода, программа будет постоянно его ожидать. 
//Благодаря этому пакету можно разрабатывать интерактивные программы
rl.on('line', (cmd) =>{
    console.log('You typed: ', cmd);
    if (cmd === 'exit') {
        console.log('goodbye');
        rl.close();
    }
})

// более мощные пакеты работы с консолью - prompt и cli