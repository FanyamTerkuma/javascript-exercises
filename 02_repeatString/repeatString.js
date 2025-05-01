const repeatString = function (receivedString, numberOfRepeats) {
    let repeatedString = '';

    if (numberOfRepeats < 0) {
        return 'ERROR';
    }
    for (i = 0; i < numberOfRepeats; i++) {
        repeatedString = repeatedString + receivedString;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
