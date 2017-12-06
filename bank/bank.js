var fs = require('fs')
var input =  process.argv[2];
var num = process.argv[3];

function total(){
  fs.readFile('./bank/bank.txt', 'utf8', function(err, data){
    if(err) {
      return console.log('err', err)
    }
    var ray = data.split(', ')
    console.log('ray', ray)
    const reduced = ray.reduce((accumulator, num)=>{
      console.log('num', num, parseFloat(num))
      return accumulator + parseFloat(num)
    }, 0)
    const result = Math.round(reduced*100)/100
    console.log('total', result)
  })
}
function deposit(x){
  fs.appendFile('./bank/bank.txt', ', ' + x, function(err) {    
    if(err) {
      return console.log(err)
    }
    console.log('appended to file success!')
  })
}
function widthdraw(x){
  fs.readFile('./bank/bank.txt', 'utf8', function(err, data){
    if(err) {
      return console.log('err', err)
    }
    var ray = data.split(', ')
    console.log('ray', ray)
    const filtered = ray.filter((num)=>{
      if(num === x) {
        return false
      }
      return true
    })
    const joined = filtered.join(', ')
    fs.writeFile('./bank/bank.txt', joined,  function(err) {
      if(err){
        return console.log('err', err)
      }
      console.log('widthdrew: ', x)
    })
  })
}
function lotto(x){
  var random = Math.floor(Math.random()*4*x)
  fs.appendFile('./bank/bank.txt', ', -' + x +', ' + random, function(err, data) {
    if(err){
      return console.log('err', err)
    }
    console.log('you won:', random, 'and paid:', x)
  })
}
const transactions = {
  total,
  deposit,
  widthdraw,
  lotto
}

console.log(transactions[input](num))