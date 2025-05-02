const removeFromArray = function (array, ...itemsToRemove) {
    let newArray = [];
    if (itemsToRemove.length > 1) {
        for (const item of array) {
            if (!itemsToRemove.includes(item)) {
                newArray.push(item);
            }
        }
    } else {
        for (const item of array) {
            if (item !== itemsToRemove[0]) {
                newArray.push(item);
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
