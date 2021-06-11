let math = require('./math-tools.js');

/* 모듈에서 하나씩 가져올 경우 */
// console.log(math.PI);
// console.log(math.author);
// console.log(math.add(1, 2));
// console.log(math.test.date);
// console.log(math.test.types)
// math.test.printTypes()

/* 모듈에서 객체로 한 번에 가져올 경우 */

// console.log(math.PI)
// console.log(math.add(1, 2));
// console.log(math.subtract(1, 2));
// console.log(math.multiply(1, 2));
// console.log(math.divide(1, 2));

/* 코어 모듈 */
// const fs = require('fs')

// let fileList = fs.readdirSync('.');
// console.log(fileList)

// fs.writeFileSync('new', 'Hello Node.js')

// const os = require('os')

// console.log(os.cpus())

/* 서드파티 모듈 */
// const cowsay = require('cowsay')

// console.log(cowsay.say({
//     text: "I Love Typescript"
// }))


/* 비동기 프로그램과 EventEmitter */
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('test', () => {
    console.log('Success!')
});

myEmitter.emit('test');