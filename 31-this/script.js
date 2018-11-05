// 'use strict'
// console.log(this)
// console.log(this)
//
// function sayHello(){
//   console.log('hello', this)
// }

// let jake = {
//   firstName: "Jake",
//   lastName: "Shilling",
//   greet: greet
// }
//
// let mel = {
//   firstName: "Mel",
//   lastName: "MacDonald",
//   greet: greet
// }
//
// function greet(){
//   console.log(`${this.firstName} says hi`)
//   this.fullName = `${this.firstName} ${this.lastName}`
// }
//
// greet()

// window.firstName = "Mr. Window"

// jake.greet()
// mel.greet()
// greet() //window.greet()

//better organization
// let jake = {
//   firstName: "Jake",
//   lastName: "Shilling",
//   greet: function(){
//     console.log(`${this.firstName} says hi`)
//     this.setFullName()
//   },
//   setFullName: function(){
//     this.fullName = `${this.firstName} ${this.lastName}`
//   }
// }


// let jake = {
//   firstName: "Jake",
//   lastName: "Shilling",
//   greet: function(){
//     debugger
//     console.log(`${this.firstName} says hi`)
//     let setFullName = () => {
//       debugger
//       this.fullName = `${this.firstName} ${this.lastName}`
//     }
//     setFullName()
//   }
// }




//.bind()   .call()   .apply()
let jake = {
  firstName: "Jake",
  lastName: "Shilling",
  greet: greet
}

let mel = {
  firstName: "Mel",
  lastName: "MacDonald",
  greet: greet
}

function greet(person1, person2){
  console.log(`${this.firstName} ${this.lastName} says hi to ${person1} and ${person2}`)
}

// greet.call(mel, "Ann", "Paul")
// greet.apply(mel, ["Bruno", "Sam"])

let gibberish = greet.bind(mel, "Bruno", "Rob")
// let boundGreet2 = boundGreet.bind(jake)
//
// function timesSomething(num){
//   return function(x){
//     return x * num
//   }
// }
//
// let timesThree = timesSomething.bind(null, 3)











//
