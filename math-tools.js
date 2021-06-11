const PI = 3.14;
let author = 'codeit teacher';

function add(a, b) {
    return a+b;
}

let test = {
    date: '2020-09-20',
    types: ['safetyTest', 'performanceTest'],
    printTypes() {
        for (const i in this.types) {
            console.log(this.types[i])
        }
    }
};

exports.PI = PI;
exports.author = author;
exports.add = add;
exports.test = test;