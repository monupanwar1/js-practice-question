//optional chaining and nulish;

let user={
    name:"KunalPanwar",
    address:{
        city:"Gurugram"
    },
}
console.log(user.name);
console.log(user.contact?.phone); // optinal chaining


let user1={
    name:"KunalPanwar",
    preference:null
}
let theme = user.preference?.theme??'light'; // nulish operator used for null and undefined
console.log(theme)