var argv = require('minimist')(process.argv.slice(2));

var random = function(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
};

var printHelp = function(){
    console.log('Lottery (r) by Eric Santos');
    console.log('--help             Print this help.');
    console.log('--totalNumbers     default is 6.');
    console.log('--initialRange     default is 1.');
    console.log('--finalRange       default is 60.');

};

if(argv.help){
    printHelp();
    process.exit();
}

var totalNumbers = 6,  initialRange=1, finalRange = 60;

if(argv.totalNumbers){
    totalNumbers = parseInt(argv.totalNumbers);
}
if(argv.initialRange){
    initialRange = parseInt(argv.initialRange);
}
if(argv.finalRange){
    finalRange = parseInt(argv.finalRange);
}

var numbers = [];

while(numbers.length !== totalNumbers){

    var newNumber = random(initialRange, finalRange);

    if(numbers.indexOf(newNumber) === -1){
        numbers.push(newNumber);
    }

}

var compareNumbers = function(a, b) {
    return a - b;
};

numbers = numbers.sort(compareNumbers);

var printNumber = function(element, index, array) {
    console.log(element);
};

numbers.forEach(printNumber);
