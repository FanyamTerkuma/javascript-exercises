const convertToCelsius = function (temp) {
    let tempInCelsius = temp === 32 ? 0 : (temp - 32) * 5 / 9;
    return Number(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function (temp) {
    let tempInFahrenheit = temp === 0 ? 32 : temp * 9 / 5 + 32;
    return Number(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
