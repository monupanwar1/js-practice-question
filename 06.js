// splice method // actual array is modifed
let arr =[1,2,3,4,5,6,7];
// arr.splice(2,4); // starting and number of array element removed

arr.splice(0,0,0) //adding o to oth index 
console.log(arr)

arr.splice(7,1,8); // replacing
console.log(arr)
