// first loop number is the number of rows second loop is for the stars each row


let row =5;


for (let i = 0; i<= row; i++){  // first loop i rows
    let stars="";
    for(let j= 1; j<=i; j++){ // stars per iteration base 1 increase +1 each iteration
        stars += "*";
    }
    console.log(stars)
}