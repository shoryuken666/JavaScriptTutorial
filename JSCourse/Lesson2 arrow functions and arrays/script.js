/**
 * Array of elements
 */
let myArray = [1, 2, 'three', 4, 'cinco', 6, 'nana'];

console.log(myArray);


const eachElement = (element) => {
  console.log(element);  
};

console.log('***********');
console.log();
myArray.forEach(eachElement);

myArray.pop();
myArray.pop();
myArray.pop();

console.log('***********');
console.log();
myArray.forEach(eachElement);


myArray.push('banana');
myArray.push('apple');
myArray.push('tomato');

console.log('***********');
console.log();
myArray.forEach(eachElement);

myArray.shift();
myArray.shift();
myArray.shift();
myArray.shift();

console.log('***********');
console.log();
myArray.forEach(eachElement);

