const EventEmitter = require('events').EventEmitter; //eventemitter2, eventemitter3 - дадут лучшую производительность

class Kettle extends EventEmitter {
    constructor() {
        super();
        /*this.emit('created') событие сразу происходит (до того как мы на него подписались) 
        - мы не можем на него подписаться
        нужно добавить в eventLoop - очередь всех событий. setTimeout ставит передаваемую в
        него функцию в очередь приоритетов, в свою фазу - фазу таймеров*/
        
        //setTimeout(() => this.emit('created'), 0) - это тоже не самй правильный вариант. Есть ещё
        
        /*также присутствует в браузере, но выполняется на другой фазе нежели setTimeout
        setImmediate(()=>this.emit('created'))*/

        //но есть чисто нодовская штука
        process.nextTick(()=>this.emit('created'));
    }

    start() {
        setTimeout(() => {
            /*унаследованный метод, позволяющий генерировать свои пользовательские события
            первый параметр - наименование события, которое хотим вызвать (название придумываем сами)
            второй параметр - объект event
            теперь наш чайник может генерить события и мы можем на них подписываться
            */
            this.emit('ready', {
                name: 'Sasha'
            })
        }, 3000)
    }
}

const kettle = new Kettle();

kettle.start();

// подписка на событие
kettle.on('ready', event => {
    console.log(`${event.name}, чайник вскипел`)
})

/* здесь также функция добавляется в eventLoop но гораздо раньше setTimeout (в последнюю очередь) в конструкторе,
благодаря чему подписка на событие происходит раньше, а не после того как событие уже выполнилось*/
kettle.on('created', () => console.log('Чайник создался'))

/*
setTimeout(() => {
    //выполняется 10секунд
}, 1000); 
1000 - означает - код будет запущен не раньше чем через 1 секунду - нет гарантии
второй тайм аут выполнится сразу и не будет ждать ещё одну секунду, так как
пройдёт достаточно времени
setTimeout(()=>console.log('прошло 11секунд'), 1000); 
*/
