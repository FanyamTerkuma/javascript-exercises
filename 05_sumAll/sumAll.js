const sumAll = function (firstNumber, lastNumber) {
    if (firstNumber < 0 || lastNumber < 0) return 'ERROR';
    if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) return 'ERROR';

    // array destructing to swap the values of the firstNumber and lastNumber if the firstNumber is larger
    if (firstNumber > lastNumber) [firstNumber, lastNumber] = [lastNumber, firstNumber];

    let sum = 0;
    for (let i = firstNumber; i <= lastNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
