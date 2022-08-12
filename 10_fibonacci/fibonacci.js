const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let prevNum = 1, currNum = 1, temp;
    for (let i = 2; i < n; i++) {
        temp = currNum;
        currNum = prevNum + currNum;
        prevNum = temp;
    }
    return currNum;
};

// Do not edit below this line
module.exports = fibonacci;
