// making the checking function
const checkKey=(key,object)=>{

    if(!object){
        return false;
    }
    return object.hasOwnProperty(key);
    
}
// making a dummy object 
const obj ={
    name:"kunalPanwar",
    age:"20"
};
// checking the key is present or not
console.log(checkKey('age',obj))