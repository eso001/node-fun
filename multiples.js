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
console.log('sum', sum)