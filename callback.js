function asyncOperation(cb) {
setTimeout(
    () => cb()
    , 1000
);
}

asyncOperation(()=> console.log('ку-ку'))