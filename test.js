var fs = require('fs')

console.log('old file: ')
fs.readFile('movie.txt', 'utf8', function(err,data){
  if(err){
    return console.log(err)
  }
  console.log('data', data)
  fs.writeFile("movie.txt", "FUNNY HOT AND SEXY odd movie", function(err){
    if (err) {
      return console.log(err)
    }
    console.log('movie.txt was updated')
  })

})


