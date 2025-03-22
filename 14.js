// var vs let vs const

//scope of var is function scope 

var name="kunal"
console.log(name);
var name="kunalPanwar" //function scope 
console.log(name)


// not redclare but value can be change
let age =25;
console.log(age);
age =90;
console.log(age);


// neither redclare nor can be change
const city="Delhi";
console.log(city);
city="Bangluru";
console.log(city);


function demo(){
if(true){
    var a =10; // function
    let b =20; // block scope
    const c =40; // block scope

}
}

console.log(a)
console.log(b)
console.log(c) //