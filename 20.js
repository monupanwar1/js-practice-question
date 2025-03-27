// this keyword 
// name="kunal"
const obj={
    name:"kunal",
    greet:function(){
        return`hello ${this.name}`
    }
}
const greetFn =obj.greet.bind(obj); // standlone function
console.log(greetFn())