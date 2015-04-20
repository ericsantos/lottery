var Lottery = function (totalNumbers, initialRange, finalRange) {

    if (!totalNumbers) {
        totalNumbers = 6;
    }

    if (!initialRange) {
        initialRange = 1;
    }

    if (!finalRange) {
        finalRange = 60;
    }

    if (finalRange - initialRange < totalNumbers) {
        throw "It is not possible to generate all numbers requested. TotalNumbers cannot be greater than all range";
    }

    var _random = function (low, high) {
            return Math.floor(Math.random() * (high - low + 1) + low);
        },
        _compareNumbers = function (a, b) {
            return a - b;
        },
        _generateNumbers = function () {

            var numbers = [];

            while (numbers.length !== totalNumbers) {

                var newNumber = _random(initialRange, finalRange);

                if (numbers.indexOf(newNumber) === -1) {
                    numbers.push(newNumber);
                }

            }

            numbers = numbers.sort(_compareNumbers);

            return numbers;

        };

    return {
        generateNumbers: _generateNumbers
    };
};

module.exports = Lottery;