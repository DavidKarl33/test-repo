//Task 1 Inventory Tracker
// the code below logs the array using for loop,
// every iteration starting from index[0] logs because i=0 until i < 5  
let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
let inventoryCount = [10, 15, 5, 20, 7];

for (let i = 0; i < inventory.length; i++) {            // i = 0  > 1 > 2 > 3 > 4    < 5
  console.log(`${inventory[i]}: ${inventoryCount[i]}`); // index[0] = apple  : index[0] = 10  
														// index[1] = banana : index[1] = 15 
														// index[2] = cherry : index[2] = 5
														// index[3] = date   : index[3] = 20
														// index[4] = elderberry : index[4] = 7
 }
//output should be:
// apple: 10
// banana: 15
// cherry:5
// date:20
//elderberry:7


//-------------------------------------------------------------
// Task 2  Alphabetical Sorting
// if condition met  hold the words[i] to temp then change the words[i] to words[j] then words[j] = temp (swapping the value)

let words = ["zebra", "apple", "mango", "cherry", "banana"];

for (let i = 0; i < words.length; i++) {                 //  i   |         0 > 1 > 2 > 3 > 4            
  for (let j = i + 1; j < words.length; j++) {           //  j   |   i+1 = 1 > 2 > 3 > 4
	if (words[i] > words[j]) {                           // words| [0]zebra, [1]apple, [2]mango, [3]cherry, [4]banana    
	  let temp = words[i];                               // len  |    5               
	  words[i] = words[j];                               //   words[0zebra] > words[1apple]   true    [0]apple, [1]zebra, [2]mango, [3]cherry, [4]banana       
	  words[j] = temp;                                   //   words[0apple] > words[2mango]   false 
	 }                                                   //   words[0apple] > words[3cherry]  false 
   }                                                     //   words[0apple] > words[4banana]  false 
}                                                        //   words[1zebra] > words[2mango]   true    [0]apple, [1]mango, [2]zebra, [3]cherry, [4]banana  
console.log("mango" > "cherry");                         //   words[1mango] > words[3cherry]  true    [0]apple, [1]cherry, [2]zebra, [3]mango, [4]banana  
console.log("cherry" > "banana");                        //   words[1cherry]> words[4banana]  true    [0]apple, [1]banana, [2]zebra, [3]mango, [4]cherry 
console.log("zebra" > "mango");                          //   words[2zebra] > words[3mango]   true    [0]apple, [1]banana, [2]mango, [3]zebra, [4]cherry 
console.log("mango" > "cherry");                         //   words[2mango] > words[4cherry]  true    [0]apple, [1]banana, [2]cherry, [3]zebra, [4]mango
														 //   words[3zebra] > words[4mango]   true    [0]apple, [1]banana, [2]cherry, [3]mango, [4]zebra
// console.log(words)			   						 //   words[4zebra] > words[5] x 
//output should be: [0]apple, [1]banana, [2]cherry, [3]mango, [4]zebra



//--------------------------------------------------------------
// Task 3  Unique Array Builder
// create empty arr = uniqueNumbers  , keeps looping while array has < 10 element 
// generate randomNumber using math.random * 20 =  0-19.99   and math.floor to round it down 0-19  + 1 = 1-20
// assign exists = false , for loop to iterate throguh the uniquenNumber if the number[i] === randomNumber change the value of exists to true and break the loop 
// if the loop doesnt find the number on the uniqueNumber  push the randomNumber to uniqueNumbers           

let uniqueNumbers = [];

while (uniqueNumbers.length < 10) {
  let randomNumber = Math.floor(Math.random() * 20) + 1;

  // Check if the randomNumber already exists in the array
  let exists = false;
  for (let i = 0; i < uniqueNumbers.length; i++) {
	if (uniqueNumbers[i] === randomNumber) {
	  exists = true;
	  break;
	}
  }

  // If it doesn't exist, add it to the array
  if (!exists) {
	uniqueNumbers.push(randomNumber);
  }
}

console.log(uniqueNumbers);
//the outputshould be an array of 10 random numbers ranging {1-20}




//----------------------------------------------------------------
// Task 4 Triangle
// if 7 +10 = 17 > 5 &&
// 	  10+ 5 = 15 > 7 &&
//    7 + 5 = 12 > 10 = all true
let sideA = 7;
let sideB = 10;
let sideC = 5;

if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
  console.log(`The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.`);
} else {
  console.log(`The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.`);
}

//The output should log: The sides 7 , 10, and 5 form a valid triangle.
