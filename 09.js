 // spread operator with fuction 

 function sum(a,b,c){
    return a+b+c;
 }
 const number =[1,2,3];
 console.log(sum(...number))
 console.log(sum(number))


 // array with spread

 const name="KunalPanwar";
 const letter=[...name];
 console.log(name);
 console.log(letter);