// create book {title, author, pages ,read or unread}
// log all of them with objec t.property
// change the isRead to true and create a property
//task1

let book = {
    title: "Ikigai",
    author: "Héctor García",
    pages: 208,
    isRead: false
};

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Pages:", book.pages);
console.log("Is Read:", book.isRead);

book.isRead = true;
book.genre = "Fantasy";

console.log(book);


//task2
// let movies = title, director, year               
// push another movie 
//change index[0] year to 2023

let movies= [
    {title:"Before Sunrise", director:"Richard Linklater", year:1995 },
    {title:"Before Sunset", director:"Richard Linklater", year:2004},
    {title:"Before Midnight", director:"Richard Linklater", year: 2013}
];

console.log(movies[0]);

movies.push({title:"Spongebob Squarepants Movie ", director:"Stephen Hillenberg", year:2006});

movies[0].year=2023;

console.log(movies);

//task 3 
// create a student objetc with name age subjects < array
// push 1 more subj in subjects 

let student = {
    name: "David",
    age: 2,
    subjects: ["Math","Science","English"]
};

console.log(student.subjects[0]);

student.subjects.push("P.E");

console.log(student);

//task 4 create a object recipe with name and ingredients(arr) isVeg(boolean)
//Add a new ingredient to the ingredients array.
// Print the name of the second ingredient in the ingredients array.
// Print the entire recipe object.

let recipe ={
    name:"fried Chicken",
    ingredients:[
        { name: "Chicken", quantity: "1 kg" },
        { name: "Flour", quantity: "2 cups" },
        { name: "Eggs", quantity: "2 pieces" },
        { name: "Milk", quantity: "1/2 cup" },
        { name: "Salt", quantity: "1 tsp" },
        { name: "Pepper", quantity: "1 tsp" },
        { name: "Oil", quantity: "2 cups" }
    ],
    isVegetarian:false
};

recipe.ingredients.push({name:"Chili powder",quantity:"1tbsp"});

console.log(recipe.ingredients[1]);

console.log(recipe);