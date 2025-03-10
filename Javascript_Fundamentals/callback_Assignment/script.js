// Task 1
// create a holder for the arr then pass the isEven with if condition push every Even
function customFilter(arr, callback) {
    let result=[];
    for(let i = 0 ; i< arr.length; i++){
        if(isEven(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]


// ----------------------------------------------
// Task 2
// create a loop that set the start >= 0 then print each with timeout 1sec
function countdown(start, callback) {
    for(let i = start; i >= 0; i--){
        setTimeout(() => callback(i), 1000 * (start - i));
    }
    
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

//-------------------------------------------------
//Task 3 
// 
function createButton(buttonText, callback) {
    // Your code here
    let button = document.createElement("button"); //create button element
    button.textContent = buttonText;               // set the button
    button.addEventListener("click", callback);    // run callback function when click
    document.body.appendChild(button);             // Add the button to the webpage
   
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);  



//-------------------------------------------------
//Task 4
// i to track the tasks 

function runTasks(tasks) {
    let i = 0;

    function nextTask(){
        if (i < tasks.length){
            tasks[i]();       //current task
            i++;              // next task
            setTimeout(nextTask,1000);  // delay before next task
        }
    }

    nextTask();   // start nextTask
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);  