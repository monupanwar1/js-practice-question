const users ={
    name:"kunal",
    age:'20',
    role:"Frontend Developer"
}
console.log(Object.keys(users)) // return array

for(key in users){
    console.log(key,users[key]) // return key and value
}

// // by proto

const users1 =Object.create(users);
users1.name='john Doe'
console.log(Object.keys(users1)) // show property which exits on users
console.log(users1.name)