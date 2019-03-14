/*console.log(process.argv.slice(2)); 
получаем массив. Первые два элемента - путь к ноде, второй - к исполняемому файлу
 node cli -a 10 -b 12 нам даст
[ 'C:\\Program Files\\nodejs\\node.exe',
  'D:\\OpenServer\\OSPanel\\domains\\NodeJSconsoleProgramsLearning\\cli',
  '-a',
  '10',
  '-b',
  '12']
поэтому первые два параметра отсекаем слайсом
*/

const minimist = require('minimist');

const argv = (minimist(process.argv.slice(2)), {
    alias: {
        help: 'h'
    }
});

console.log(argv)
/*
PS D:\OpenServer\OSPanel\domains\NodeJSconsoleProgramsLearning> node cli -x 10 -y 4 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  x: 10,
  y: 4,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
*/

console.log(process.env)