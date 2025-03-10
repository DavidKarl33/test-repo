// Exercise  1

function calculate(a, b, operation){
    return operation(a,b);
}

function add(a, b){
    return a + b ;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function division(a,b){
    return a / b;
}

console.log(calculate(5, 6,add));
console.log(calculate(6, 6,division));
console.log(calculate(3, 4,multiply));
console.log(calculate(5, 2, subtract));




//---------------------------------------
// Exercise  2

function delayedMessage(message, delay, callback, anotherCall) {
    setTimeout(() => {
        anotherCall(message);
    }, delay);
    callback();
}

delayedMessage("Hello!", 
    2000,
    function() {
        console.log("Dev");
    }, 
    function(msg) {
        console.log(msg);
    }
);

//---------------------------------------
// Exercise  3

function repeatTask(times, callback) {
    let i=0;
    while(i<times && callback(i)!==false){
        i++;
    }
}

repeatTask(3, function(index) {
    console.log("Iteration:", index);
    return index!==1;
});

