var myVariable = 'I  love melted cheese ';

let lynnVariable = 'Lynn is pretty';

const myConstant = 5;

/**
 * This will produce an error, we can not re-assign a value to a conctant
 */
//myConstant = 'Lynn';

lynnVariable = 'Lynn is more pretty';

console.log(myVariable);
console.log(lynnVariable);
console.log(myConstant);

let myFunction = function (myText) {
    console.log(myText);
};



let multiplyNumbers = function (numberOne, numberTwo) {

    console.log('Inside multiplyNumbers');

    let result = numberOne * numberTwo;
    console.log('First parameter: ');
    console.log(numberOne);
    console.log('Second parameter: ');
    console.log(numberTwo);

    console.log('Result: ');
    console.log(result);
};


multiplyNumbers(6, 7);

