// I have trouble making a party because i had to create another array inside make party function to access the list of names
// I mooved the variables to access it to fix the issue
// to make a party with random names because all im getting 'hero' because its the default for all the names if It's not define
let names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
let classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
let abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];

// Function to pick a random item from an array (like random names, classes)
function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// creates a character
function generateCharacter(name = "Hero") {
    const character = {
        name: name || randomElement(names), 
        class: randomElement(classes), 
        health: 100, 
        specialAbility: randomElement(abilities),
    };

    // sets a random health for the character
    function randomHealth(character) {
       
        character.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    }

    //  attack 1 character
    function battle(character, opponent) {
        
        let damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        let oldHealth = opponent.health; 
        opponent.health = Math.max(0, opponent.health - damage); 

        // log the attack
        console.log(
            "Character " + character.name + " attacked Character " + opponent.name +
            " with " + character.specialAbility + " and dealt " + damage +
            " damage!! " + opponent.name + "'s health dropped from " + oldHealth +
            " to " + opponent.health + "."
        );
    }

    // set random health for the character
    randomHealth(character);
    
    // Add the battle function to the character object
    character.battle = (opponent) => battle(character, opponent);
    
    return character; // Return the created character
}

// creates a list of characters (party) with random names
function makeParty(num) {
    let characters = [];
    for (let i = 0; i < num; i++) {
        characters.push(generateCharacter(randomElement(names))); 
    }
    return characters; 
}

// test
const randomChar = generateCharacter(); // create a random character with default name
console.log(randomChar);  

const namedChar = generateCharacter("Drake"); 
console.log(namedChar);  

const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

// battle
character1.battle(character2);


const party = makeParty(5);
console.dir(party);
