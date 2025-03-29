let count =0; //
const add =(function(){
    if(count===0){
        count+=1;
    }
    return function(){
        count+=1;
        console.log(count)
    }

})() // lexical scope only access the parent function varaible  // closure it access parents function either if its is executed or storing a value
add()
add()
add()