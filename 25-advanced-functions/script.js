//Callbacks

// let arr = [1,2,3,4]
// // let newArray = arr.map(timesTen)
// //
// function timesTen(el){
//   return el * 10
// }
//
// function addTwo(el){
//   return el + 2
// }
//
// function myMapper(arr, varA){
//   let newArray = []
//   for(x of arr){
//     newArray.push(varA(x))
//   }
//   return newArray
// }

// setTimeout(sayHello, 1000)
// let num = setInterval(sayHello, 1000)
//
// setTimeout(function(){clearInterval(num)}, 5000)
//
// function sayHello(){
//   console.log("HII!!!!")
// }

// function addsNewStudent(name, process){
//   console.log(`Welcome ${name} to Flatiron!`)
//   process()
// }
//
// function giveStudentKeyCard(){
//   console.log(`Here is your key card`)
// }
//
// function giveWebSiteCred(){
//   console.log(`Check your email for your username and password`)
// }



//FunctionFactory

function welcomeStudentToModFactory(modNum){
  //var modNum = modNum
  return function welcomeStudentByName(studentName){
    console.log(`Welcome ${studentName} to Mod ${modNum}`)
  }
}

let welcomeStudentToMod1 = welcomeStudentToModFactory(1)
let welcomeStudentToMod2 = welcomeStudentToModFactory(2)
let welcomeStudentToMod3 = welcomeStudentToModFactory(3)
let welcomeStudentToMod4 = welcomeStudentToModFactory(4)
let welcomeStudentToMod5 = welcomeStudentToModFactory(5)


//
// function welcomeStudent(name, num){
//   console.log(`Welcome ${name} to Mod ${num}`)
// }

//Closures

// function generateNewID(){
  let id = 0
  function genID(studentName){
    id++
    console.log(`${studentName}, your ID is ${id}`)
  }
// }

// let addStudent = generateNewID()


//IIFE Immediately Invoked Function Expressions

(function createDCCampus(date, location, cohort){
  dcCampus = `New campus opened on ${date} at location ${location} with ${cohort}`
}('March 2018', 'on G Street', 'Baby got Stack'))







OO Programming

class Instructor

  def initialize(name, salary)
    @name = name
    @salary = salary
  end

  def give_raise(raise)
    @salary = @salary + raise
  end

  def show_info
    puts "#{@name} makes $#{@salary}"
  end

end

arr = [Instructor.new("Ann", 100), Instructor.new("Paul", 100)]

arr.each{ |x| x.give_raise(100)}
arr.each{ |x| x.show_info}

Functional Programming

arr = [{name:"Ann", salary:100},{name:"Paul", salary:100}]

function updateSalary(instructor, raise){
  newInstructor = Object.assign({}, instructor)
  newInstructor.salary = instructor.salary + raise
  return newInstructor
}

function updateSalaries(instructors, raise){
  return instructors.map(instructor => updateSalary(instructor, raise))
}

newArr = updateSalaries(arr, 100)
console.log(newArr)

//
