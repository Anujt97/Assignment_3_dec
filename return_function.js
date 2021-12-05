console.log("Returning a function");


let a= function(parameter1){
    let b= function(parameter2){
        let c=function(parameter3){
            let add=parameter1 + parameter2 + parameter3;
            console.log(add);
        }

        return c;
        
        
    }
    return b;

}

a(10)(20)(100);