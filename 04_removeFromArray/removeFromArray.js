const removeFromArray = function(array, ...rmArgs) {
    for (const arg of rmArgs) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arg) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
