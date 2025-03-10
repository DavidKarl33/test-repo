// Encounter a problem when the player reach 0 or -hp they can still attack
// fixed it by using Math.max(0,player.hp) to round negative numbers to 0
let player1 = { 
    name: "Zagreus",
    hp: 100,
    strength: 20,
    attack: function(strength) {
        return Math.floor(Math.random() * strength + 1);
    }
};

let player2 = {
    name: "Hades",
    hp: 100,
    strength: 20,
    attack: function(strength) {
        return Math.floor(Math.random() * strength + 1);
    }
};

console.log("Battle Begins! ");

for (let round = 1; round < 11; round++) {
    console.log("=== Round: " + round + " ===");

    // Attack and reduce HP for player 2
    let player1Damage = player1.attack(player1.strength);
    player2.hp -= player1Damage;
    player2.hp = Math.max(0, player2.hp);

    console.log(player1.name + " Attacks " + player2.name + " and deals " + player1Damage + " damage!");
    console.log("Zagreus HP: " + player1.hp + " | Hades HP: " + player2.hp);
    console.log("\n");

    if (player2.hp <= 0) {
        console.log(player1.name + " Wins 🏆");
        break;
    }

    // Attack and reduce HP for player 1
    let player2Damage = player2.attack(player2.strength);
    player1.hp -= player2Damage;
    player1.hp = Math.max(0, player1.hp);

    console.log(player2.name + " Attacks " + player1.name + " and deals " + player2Damage + " damage!");
    console.log("Zagreus HP: " + player1.hp + " | Hades HP: " + player2.hp);
    console.log("\n");

    if (player1.hp <= 0) {
        console.log(player2.name + " Wins 🏆");
        break;
    }
}

if (player1.hp > 0 && player2.hp > 0) {
    if (player1.hp > player2.hp) {
        console.log(player1.name + " Wins 🏆");
    } else if (player2.hp > player1.hp) {
        console.log(player2.name + " Wins 🏆");
    } else {
        console.log("Draw!");
    }
}


