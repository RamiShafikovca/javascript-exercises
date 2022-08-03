const reverseString = function(str) {
    let string = "";
    for (let i = str.length; i >= 0; i--) {
        string += str.charAt(i);
    }
    return string;
};
console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
