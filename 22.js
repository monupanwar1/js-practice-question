// rest vs spread 
function sum(...number){
    console.log(...number) // array rest operator collect all the argument into array
    return number.reduce((total,number)=>total+number,0) //rest
}
// console.log(sum(1,2,3,4))

const nums=[1,2,3,4,5];
console.log(sum(...nums)) // spread take items from array and spread them out 