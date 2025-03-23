// sort method in js
// first convert number to string then sort by help of ascii
const number =[10,2,4];
const sortNumber=number.sort();
console.log(sortNumber); // sorting by converting them to string 

const number1 =[10,2,4];
const sortNumber1=number.sort((a,b)=>a-b);
console.log(sortNumber1); // give correct output


const alphabets=[
    'banana',
    'apple',
    'cherry',
    'date'
]

const sortedAlphabets=alphabets.sort();
console.log(sortedAlphabets); // sorting in correct order