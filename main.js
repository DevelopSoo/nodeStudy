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

const fs = require('fs')

let fileList = fs.readdirSync('.');
console.log(fileList)

fs.writeFileSync('new', 'Hello Node.js')

const os = require('os')

console.log(os.cpus())