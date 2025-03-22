const user ={
    name:"kunalPanwar",
    age:20,
    profession:"software enginner",
    company:"Microsoft"
}
// convert obj to String ✅;
const jsonString=JSON.stringify(user);
console.log(jsonString);

// convert string to object
const jsonObject = JSON.parse('{"name":"kunalPanwar","age":20,"profession":"software engineer","company":"Microsoft"}');
console.log(jsonObject)


0