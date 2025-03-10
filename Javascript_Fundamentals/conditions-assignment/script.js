//Create a variable named score and assign a value between 0 and 100.
// Write a conditional statement to assign a grade based on the score:
// 90–100: Grade A
// 80–89: Grade B
// 70–79: Grade C
// 60–69: Grade D
// Below 60: Grade F
// Log the grade to the console.


let score = 88;
let grade ;

if (score >= 90 && score <=100){
    grade = "A";
}
else if(score >=80 && score < 90){
    grade = "B";
}
else if(score >=70 && score < 80){
    grade = "C";
}
else if(score >=60 && score < 70){
    grade =  "D";
}
else{
    grade = "F";
}

console.log(grade);


// Create a variable named temperature and assign it a value.
// Write a conditional statement to display messages based on the temperature:
// If the temperature is below 0, log: "It's freezing outside! Bundle up!"
// If the temperature is between 0 and 15, log: "It's cold outside. Wear a jacket."
// If the temperature is between 16 and 30, log: "The weather is nice. Enjoy your day!"
// If the temperature exceeds 30, log: " StIt's hot outside.ay hydrated!"

let temperature = -23;

if (temperature < 0){
    console.log("It's freezing outside ! Bundle up!");
}
else if(temperature >= 0 && temperature <= 15){
    console.log("It's cold outside. Wear a jacket.");
}
else if(temperature >= 16 && temperature <= 30){
    console.log("The weather is nice enjoy your day!");
}
else if(temperature >30){
    console.log("Its hot outside stay hydrated!");
}

// If the age is below 13, log: "You are too young for this activity."
// If the age is between 13 and 17, log: "You need parental permission."
// If the age is 18 or older, log: "You are eligible for this activity."

let age = 18;

if (age < 13){
    console.log("You are too young for this activity.");
}
else if(age >= 13 && age <= 17){
    console.log("You need parental permission.");
}
else{
    console.log("You are eligible for this activity");
}

// Create variables named age and isMember.
// If the age is under 12, the ticket is free.
// If the age is 12 or older and isMember is true, the ticket costs $10.
// If the age is 12 or older and isMember is false, the ticket costs $15.
// Log the ticket price to the console.


let isMember = true;
let ticketPrice;

if (age <12){
    tickerPrice="Free";
}
else if(age >= 12 && isMember){
    ticketPrice="$10";
}
else{
    ticketPrice="$15";
}

console.log(ticketPrice);


