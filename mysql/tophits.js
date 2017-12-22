var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'top_songs_db'
})

connection.connect(function(err) {
  if (err) throw err;
  //threadId 
  console.log('connected as id: ' + connection.threadId)
  afterConnection()
})

function afterConnection() {
  connection.query('SELECT * FROM top6000', function(err, res) {
    if(err) throw err;

    console.log(res)
    connection.end()
  })
}

