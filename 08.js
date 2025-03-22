// spread operator

const number =[1,2,3];
const copyNumber=[...number]; // copy by spread operator
console.log(number)

const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
const mergeArray=[...arr1,...arr2] // merge
console.log(mergeArray);

const initial =[1,2,3,4];
const extend =[0,...initial,5,6]; // extending
console.log(extend);

// object
const person={
    name:"kunal",
    age:20
}
const copyPerson={...person};
console.log(copyPerson);

const defaults={theme:"light" ,lagnguage:"en"};
const userSettings ={lagnguage:"fr"};
const settings ={...defaults,...userSettings};
console.log(settings);


const car ={
    brand:"Toyata" ,
    model:"corolla"
}
const updateCar={...car,year:2023}; // update using spread operator
console.log(updateCar);





