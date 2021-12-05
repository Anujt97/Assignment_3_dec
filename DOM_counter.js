console.log("Counter in DOM");

function counter_increment(){
    let a=parseInt(document.getElementById("counter-1").innerText);
    a=a+1;
    document.getElementById("counter-1").innerHTML=a;
}

function counter_decrement(){
    let b=parseInt(document.getElementById("counter-1").innerText);
    b=b-1;
    document.getElementById("counter-1").innerHTML=b;
    
    
}