/* 모듈에서 하나씩 가져올 경우 */
// const PI = 3.14;
// let author = 'codeit teacher';

// function add(a, b) {
//     return a+b;
// }

// let test = {
//     date: '2020-09-20',
//     types: ['safetyTest', 'performanceTest'],
//     printTypes() {
//         for (const i in this.types) {
//             console.log(this.types[i])
//         }
//     }
// };

// exports.PI = PI;
// exports.author = author;
// exports.add = add;
// exports.test = test;

/* 모듈에서 객체로 한 번에 가져올 경우 */

let calculator = {
    PI: 3.14,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

module.exports = calculator;