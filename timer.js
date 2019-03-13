// выполняются на разных фазах
setTimeout(()=>console.log('setTimout'), 0) // - появится второй
setImmediate(()=>console.log('setImmediate')) // - появится третий
process.nextTick(()=>console.log('process.nextTick')) //- появится первым