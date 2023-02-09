const log = require('../log');

const calculator = val => {

    if(!val) {
        return 0;
    };

    const numbers = val.split(/[,\n]/).map(Number);

    const sum = numbers.reduce((x, num) => x + num, 0);

    log.init(val, sum);

    return sum;
}

module.exports = calculator;

