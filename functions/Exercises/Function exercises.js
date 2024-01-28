

function makeLine(size) {
    let line = '';
    for (let i=0; i < size; i++) {
     line += '#';
    }
    return line;
 }
//  console.log(makeLine(5));
 
function makeSquare(width, height) {
let square = '';
for (let i = 0; i < height; i++) {
    square += (makeLine(height) + '\n')
    } 
return square.slice(0,-1);
}
// console.log(makeSquare(5,5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0,-1);
}    
// console.log(makeRectangle(5,4));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++)
    stairs += (makeLine(i + 1) + '\n')
return stairs.slice(0,-1);

}
// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaces = "";
    for (let i = 0; i < numSpaces; i++) {
    spaces += (" ") 
    } 
    spaces = spaces + makeLine(numChars) + spaces;
    return spaces;


}
// console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = "";
    for (let i = 0; i< height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
        
    }
    return triangle.slice(0, -1);
}
// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = [];
    for (let i = 0; i < height; i++) {
        diamond = (makeIsoscelesTriangle(height));
    }
    return diamond + '\n' + diamond.split('').reverse().join('');
}
console.log(makeDiamond(6));