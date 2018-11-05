let obj = {}

// let paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen"
// }
//
// let ann = {
//   firstName: "Ann",
//   lastName: "Duong"
// }

// function instructorFactory(firstName, lastName){
//   return{
//     firstName: firstName,
//     lastName: lastName
//   }
// }
//
// let paul = instructorFactory('Paul','Nicholseon')
// let ann = instructorFactory('Ann','Duong')

//ES5
// function Instructor(firstName, lastName){
//   this.firstName = firstName
//   this.lastName = lastName
//   Instructor.all.push(this)
// }
//
// Instructor.prototype.teach = function(){
//   console.log(`${this.firstName} is giving a lecture`)
// }
//
// Instructor.prototype.goHome = function(){
//   console.log(`${this.firstName} has gone home for the day`)
// }
//
// Instructor.all = []
// Instructor.seeAllInstructors = function(){
//   Instructor.all.forEach((i) => console.log(i.firstName))
// }

// let paul = {} Instructor()
// var arr = new Array()


//ES6
class Person{
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.bff = null
  }
  greet(){
    console.log(`${this.firstName} says hi`)
  }
  setBestFriend(person){
    this.bff = person
  }
}
class Instructor extends Person{
  constructor(firstName, lastName){
    super(firstName, lastName)
    this.employeeID = '0000'
  }
  teach(){
    console.log(`${this.firstName} is giving a lecture`)
  }
  static seeAllInstructors(){
    Instructor.all.forEach(i => {
      console.log(i.firstName)
    })
  }
}
// Instructor.all = []
let paul = new Instructor("Paul","Nicholsen")
let ann = new Instructor("Ann","Duong")
let jane = new Person('Jane', 'Doe')












//
