var fs = require('fs')

fs.readFile('bestThings/bestThings.txt', 'utf8', function(err, data){
  if (err) {
    return console.log(err)
  }

  var ray = data.split(',')
  console.log(ray)
  for( var i = 0; i < ray.length; i++) {
    console.log(ray[i])
  }
})