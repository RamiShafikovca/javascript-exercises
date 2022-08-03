const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR";
    }
    if (b < a) { 
        let temp = a;
        a = b;
        b = temp;
    }
    while (a <= b) {
        sum += a;
        a++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
