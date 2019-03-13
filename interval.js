const interval = setInterval(()=>console.log('Hello'), 1000)

/* в браузерном js setInterval возвращает число, а в node- объект с методами,
ref и unref - самые интересные*/

interval.unref(); // - может быть важно для записи логов, для опроса какого-нибудь - отвязывает нашу программу от ожидания интервала
// interval.ref(); // обратно запускаем интервал
//setTimeout(() => interval.unref(), 5000); // - прервёт интервал через 5секунд

setInterval(()=>console.log('Hello2'),5000)

