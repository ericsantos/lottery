var Lottery = function (qtd, min, max) {

    if (!qtd) {
        qtd = 6;
    }

    if (typeof min ==='undefined') {
        min = 1;
    }

    if (!max) {
        max = 60;
    }

    if ( (max - min)+1 < qtd) {
        throw "It is not possible to generate all numbers requested. TotalNumbers cannot be greater than all range";
    }

    var _random = function (low, high) {
            return Math.floor(Math.random() * ( (high+1) - low) + low);
        },
        _compareNumbers = function (a, b) {
            return a - b;
        },
        _generateNumbers = function () {

            var numbers = [];

            while (numbers.length !== qtd) {

                var newNumber = _random(min, max);

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