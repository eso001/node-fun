// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);

// Adds two command line arguments (numbers).
// console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));

//checks if equal
console.log(process.argv[2]=== process.argv[3])
var operator = process.argv[2]
var x = parseFloat(process.argv[3])
var y = parseFloat(process.argv[4])

var calculator = {
  add: (x, y) => x+y,
  sub: (x, y) => x-y,
  mul: (x, y) => x*y,
  div: (x, y) => x/y,
  rem: (x, y) => x%y,
}

console.log(calculator[operator](x, y))