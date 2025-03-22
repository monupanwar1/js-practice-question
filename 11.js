
// javascript dyanmic object property
const user ={

    name:"kunal",
    age:21,
    country:"India"
}

const keys =["name" ,"age" ,"country"];


// use forEach ehich working on a arary it is a loop
keys.forEach((key)=>{
    console.log(`${key}: ${user[key]}`)
})


console.log(user[keys[0]]) // access dyanmic keys
console.log(user[keys[1]]) // access dyanmic keys
console.log(user[keys[2]]) // access dyanmic keys



