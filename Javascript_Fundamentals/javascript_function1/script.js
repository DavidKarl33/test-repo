// Challenge 1:
// pass the numbers[] to caculateSum() 
// loop 0 < 4 
// 0 += 1 > 1 += 2 > 3 += 3 > 6 += 4 = 10
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  let numbers = [1, 2, 3, 4];
  console.log("Sum:", calculateSum(numbers)); 
//output should be= Sum:10


//------------------------------------------------------
//Challenge 2:
//logs true if the argument meets the condition and otherwise false

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
//output should be = true false true



//------------------------------------------------------
// Challenge 3:
// Concatenation using a function greet passing the variable friends in it then 
// function personalizedGreetings which loop through all the name in names to logs the fucntion greet([friends])
function greet(name) {
  return "Hello, " + name + "!";
}

function personalizedGreeting(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(greet(names[i]));
  }
}

let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);
//output should be 
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!






//------------------------------------------------------
// Challenge 4:
// Function reverseArray creates a new array by looping backward through arr.
// It pushes each element into reversed, then returns it.
// The original array remains unchanged.
function reverseArray(arr) {
  let reversed = [];                                // len=3 - 1 ; len >= 0; len -- (every iteration)          
  for (let i = arr.length - 1; i >= 0; i--) {       // i  |	arr[i] |	reversed 
    reversed.push(arr[i]);                          // 2  |   30   |  [30]
  }                                                 // 1  |   20   |  [30,20]
  return reversed;                                  // 0  |   10   |  [30,20,10]
}

let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray)); // output = [30,20,10]
console.log(originalArray);               // output = [10,20,30}







//------------------------------------------------------
// Challenge 5:
// multiplyMatrix loop using the passed parameter to it 
// it multiple the original parameter which in this case matrix and modify the value multiple it by 2 and return it
function multiplyMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {  // this outer loop iterate the rows
    for (let j = 0; j < matrix[i].length; j++) { // and this loop iterate the collums
      matrix[i][j] *= 2; //mutiply by 2 
    }
  }
  return matrix;
}
                             //          i  |  j  |[i],[j] 
let matrix = [               //          0  |  0  |   2
  [1, 2],                    //          0  |  1  |   4
  [3, 4],                    //          1  |  0  |   6  
];                           //          1  |  1  |   8
console.log(multiplyMatrix(matrix));
//output should be [[2,4],[6,8]]