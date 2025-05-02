const removeFromArray = function (inputArray, ...itemsToRemove) {
    let filteredArray = [];
    if (itemsToRemove.length > 1) {
        for (const item of inputArray) {
            if (!itemsToRemove.includes(item)) {
                filteredArray.push(item);
            }
        }
    } else {
        for (const item of inputArray) {
            if (item !== itemsToRemove[0]) {
                filteredArray.push(item);
            }
        }
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
