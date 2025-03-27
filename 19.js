// filter method
const users = [
  {
    name: 'kunal',
    age: 31,
  },
  {
    name: 'velrina',
    age: 38,
  },
  {
    name: 'wick',
    age: 12,
  },
  {
    name: 'john',
    age: 35,
  },
];



const adults =users.filter((user)=>user.age>=18).map((user)=>user.name) // transform array withh filter and map
console.log(adults)
