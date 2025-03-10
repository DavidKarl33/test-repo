// Challenge 1 
// i  |  1 > 2 > 3      this loop is for the number of rows
// j  |  1 > 1 2 > 1 2 3  this inner loop adds the strings of numbers 
// result += "\n";  prints new line after the inner loop 
function generatePattern() {  
    let result = "";  
    for (let i = 1; i <= 3; i++) {  
      for (let j = 1; j <= i; j++) {  
        result += j + " ";  
      }  
      result += "\n";  
    }  
    return result;  
  }  
  
  console.log(generatePattern()); 
//output =  1
//          1 2
//          1 2 3


//----------------------------------------------
// Challenge 2
// Swaps the first and last elements in the array
// Uses shift() to remove the first, pop() to remove the last
// Then unshift() puts the last at the start and push() puts the first at  end

function swapFirstLast(arr) {  
    let first = arr.shift();  
    let last = arr.pop();  
    arr.unshift(last);  
    arr.push(first);  
    return arr;  
}  

let numbers = [10, 20, 30, 40];  
console.log(swapFirstLast(numbers));  // Output: [40, 20, 30, 10]
console.log(numbers);  

//----------------------------------------------
// Challenge 3
// Moves passing grades (>= 70) to the back and failing grades (< 70) to the front
// Uses push() to add passing grades and unshift() to add failing ones

function filterPassingGrades(grades) {  
    let passing = [];  
    for (let grade of grades) {  
      if (grade >= 70) {  
        passing.push(grade);  
      } else {  
        passing.unshift(grade);  
      }  
    }  
    return passing;  
}  

let scores = [85, 45, 90, 60];  
console.log(filterPassingGrades(scores));  // Output: [45, 60, 85, 90]

//----------------------------------------------
// Challenge 4
// Flips the completed status of each task
// If true, becomes false If false becomes true

function updateStatus(tasks) {  
  for (let task of tasks) {  
    task.completed = !task.completed;  
  }  
  return tasks;  
}  

let taskList = [  
  { id: 1, completed: false },  
  { id: 2, completed: true }  
];  

console.log(updateStatus(taskList));  
console.log(taskList);  

//----------------------------------------------
// Challenge 5
// Looks for target in the array
// If found, returns the index If not returns Not found

function findValue(arr, target) {  
    for (let i = 0; i < arr.length; i++) {  
      if (arr[i] === target) {  
        return `Found at index ${i}`;  
      }  
    }  
    return "Not found";  
}  

let data = [5, 12, 8, 130, 44];  
console.log(findValue(data, 12));   // Output: Found at index 1
console.log(findValue(data, 100));  // Output:Not found
