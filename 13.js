// find vs filter vs findIndex


const users=[
    {
        id:1,
        name:"kunal",
        age:20,
    },
    {
        id:2,
        name:"rajat",
        age:24,
    },
    {
        id:1,
        name:"jackol",
        age:23,
    },
    
]

// find method return only single object
const user=users.find(user=>user.age===20)
console.log(user);

// findIndex method return index
const user1 = users.findIndex((user) => user.age === 20);
console.log(user1);

// Filter method new arrray with more than one object
const user2 = users.filter((user) => user.age >20);
console.log(user2);