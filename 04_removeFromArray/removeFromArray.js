const removeFromArray = function (inputArray, ...itemsToRemove) {
    let filteredArray = [];
    for (const item of inputArray) {
        if (!itemsToRemove.includes(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
