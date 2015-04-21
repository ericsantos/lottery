var assert = require('assert');
var Lottery = require("../lib/lotterynumbers");

describe('LotteryNumbers Features', function () {
    describe('generating 10 numbers between 0 and 100', function () {

        var lottery = new Lottery(10, 10, 100);

        var numbers = lottery.generateNumbers();

        it('10 numbers generated', function () {

            assert.equal(numbers.length, 10);

        });

        it('between 10 and 100', function () {

            var validateNumber = function (element, index, array) {
                assert(element >= 10 && element <= 100);
            };

            numbers.forEach(validateNumber);

        });


    });

    describe('generating 10 numbers between 1 and 10', function () {

        it('different numbers', function () {

            var lottery = new Lottery(10, 1, 10);
            var numbers = lottery.generateNumbers();

            var isUnique = function (element, index, array) {
                if (array.indexOf(element) !== array.lastIndexOf(element)) {
                    assert(false);
                }
            };

            numbers.forEach(isUnique);

        });

    });
});