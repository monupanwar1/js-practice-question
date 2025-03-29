// set method in array it return unique elements by removing the duplication

let array = [1, 2, 3, 4, 5, 6, 7, 7, 7, 9, 9, 9, 9, 9, 9, 5, 56, 6, 7, 8, 3];
const numbers = new Set(array);
numbers.add(0);
numbers.delete(56)
console.log(numbers) // type is object
console.log(numbers.has(99)) // checking 99 is present or not
console.log(Array.from(numbers))
