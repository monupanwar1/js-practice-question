// split map filter join;

const sentence ="Learning JavaScript is a fun";

const words =sentence.split(" ");
console.log(words);

const longwords= words.filter(word=>word.length>3)
console.log(longwords) // all the words which have lenght greater then 3

const upperCase=longwords.map((words)=>words.toUpperCase())
console.log(upperCase)

const finalsentence= upperCase.join("✅") // join convert array to string
console.log(finalsentence)