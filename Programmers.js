var inquirer = require('inquirer')
class Programmer  {
  constructor(name, title, age, language){
    this.name = name
    this.title = title
    this.age = age
    this.language = language
  }
 
  info(){
    console.log(this.name, this.title, this.age, this.language)
  }
  
}

var Eric = new Programmer('Eric', 'noob', 80, 'mySQL')

inquirer.prompt([
  {
    name: 'name',
    message: "What is your name?"
  },
  {
    name: 'title',
    message: "What is your title?"
  },
  {
    name: 'age',
    message: "What is your age?"
  },
  {
    name: 'language',
    message: "What is your language?"
  },
]).then(function( answers) {
  const {name, title, age, language} = answers
  var newPerson = new Programmer(name, title, age, language)
  newPerson.info()
})
// Eric.info()

