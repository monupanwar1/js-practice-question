//post and pre inc
// let count =0; //post
// console.log(count++)
// console.log(count++)
// console.log(count++)

// let count = 0; //pre
// console.log(++count);
// console.log(++count);
// console.log(++count);

// let count = 0; //pre
// console.log(++count);1
// console.log(count++);// value inc but not update 1
// console.log(++count);3


let x =10;
let y =(x++ ,x+1,x*2 ,++x)  // 10 11 12 if ++x is last then 12 , so last one is used
console.log(y)


