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

Eric.info()

