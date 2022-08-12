const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replaceAll(/([\   -/])/g, '');
    //Remove non alpha characters
    
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str.charAt(i) != str.charAt(str.length - 1 - i)) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
