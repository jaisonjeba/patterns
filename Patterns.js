function rightAngledTriangle(rows){
    console.log("Right Angled Triangle");
    for(let i=0; i<=rows; i++){
        console.log("*".repeat(i));
    }
    console.log("\n");
}

function pyramid(rows){
    console.log("Pyramid");
    for(let i=1; i<=rows; i++){
        let spaces = " ".repeat(rows-i);
        let stars = "*".repeat(2*i-1);
        console.log(spaces+stars);
    }
    console.log("\n");
}

function invertedRightAngledTriangle(rows){
    console.log("Inverted Right Angled Triangle");
    for(let i=rows; i>0; i--){
        console.log("*".repeat(i));
    }
    console.log("\n");
}

function invertedPyramid(rows){
    console.log("Inverted Pyramid");
    for(let i=rows; i>0; i--){
        let spaces = " ".repeat(rows-i);
        let stars = "*".repeat(2*i-1);
        console.log(spaces+stars);
    }
    console.log("\n");
}

function diamond(rows){
    console.log("Diamond");
    for(let i=1; i<=rows; i++){
        let spaces = " ".repeat(rows-i);
        let stars = "*".repeat(2*i-1);
        console.log(spaces+stars);
    }
    for(let i=rows-1; i>0; i--){
        let spaces = " ".repeat(rows-i);
        let stars = "*".repeat(2*i-1);
        console.log(spaces+stars);
    }
    console.log("\n");
}

function square(rows){
    console.log("Square");
    for(let i=1; i <=rows; i++){
        console.log("*".repeat(rows));
    }
    console.log("\n");
}

function hollowSquare(rows) {
    console.log("Hollow Square");
    
    for (let i = 1; i <= rows; i++) {
        if (i === 1 || i === rows) {
            console.log("*".repeat(rows));
        } else {
            console.log("*" + " ".repeat(rows - 2) + "*");
        }
    }
    
    console.log("\n");
}

function generatepattern(rows){
    rightAngledTriangle(rows);
    pyramid(rows);
    invertedRightAngledTriangle(rows);
    invertedPyramid(rows);
    diamond(rows);
    square(rows);
    hollowSquare(rows)
}

const rows = 5;
generatepattern(rows);