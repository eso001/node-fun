class Player {
  constructor(name, position, offense, defense) {
    this.name = name
    this.position = position
    this.offense = offense
    this.defense = defense
  }
  badGame(num){
  if(Math.random() * 10 > 5) {
    if(this.offense > 0) {
      this.offense--
    }
    return
  }
    
  if(this.defense > 0) {
    this.defense--
  }
    return
  }

goodGame(){
  if(Math.random() * 10 > 5) {
    if(this.offense > 0) {
      this.offense++
    }
    return
  }
    
  if(this.defense > 0) {
    this.defense++
  }
    return
  }

  printStats() {
    console.log(this.name,
      this.position,
      this.offense,
      this.defense)
  }
}
function createTeam(team){
  var created = []
  for(var i =0; i < team.length; i++) {
    let position = 'starter'
    if(i > 5) {
      position = 'substitute'
    }
    const {name, offense, defense} = team[i]
    const player = new Player(name, position, offense, defense)
      created.push(player)
  }
  console.log('created', created)
}

var team = [{
  name: 'eric', 
  offense: 7, 
  defense: 5, 
},{
  name: 'eric2', 
  offense: 10, 
  defense: 3, 
},{
  name: 'eric3', 
  offense: 5, 
  defense: 10, 
},{
  name: 'eric4', 
  offense: 10, 
  defense: 3, 
},{
  name: 'eric5', 
  offense: 7, 
  defense: 2, 
},{
  name: 'eric6', 
  offense: 3, 
  defense: 8, 
},{
  name: 'eric7', 
  offense: 8, 
  defense: 6, 
},{
  name: 'eric8', 
  offense: 5, 
  defense: 6, 
}]
createTeam(team)