// use map method in different way

// making the dummy object
const users = [
  {
    name: 'kunal',
    age: 20,
  },
  {
    name: 'Rajat',
    age: 19,
  },
];


// modify the age using the map with return keyword

const modifyAge =()=>{
    const Age=users.map((user)=>{
        return{
            ...user,age:user.age+5
        }
    })
    console.log(Age);
}

modifyAge();

// modify the age using the map without return keyword


const modifyAge2=()=>{
    const age =users.map((user)=>({...user,age:user.age+10}))
    console.log(age)
}
modifyAge2();









// using map for extracting  the name froms the object
users.map((user,i)=>{
    console.log(user.name)
})
