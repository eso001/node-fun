var x = parseFloat(process.argv[2])
var y = parseFloat(process.argv[3])

//count how many numbers are less than input and also divisible by 6

var numbersDivisibleBy6 = Math.floor(x/6)

var nums = []
for(var i = 1; i < numbersDivisibleBy6 + 1; i++) {
  nums.push(i*6)
}

const sum = nums.reduce((accumulator, num)=>{
  return accumulator + num
}, 0)
console.log('sum for 6', sum)

var numbersDivisibleByY = Math.floor(x/y)

var numsY = []
for(var j = 1; j < numbersDivisibleByY + 1; j++) {
  nums.push(j*y)
}

const sumY = nums.reduce((accumulator, num)=>{
  return accumulator + num
}, 0)

console.log('sum for Y', sumY)