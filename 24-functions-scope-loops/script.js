
// var a = {} declaration gets hoisted, assignment does not
// let b = {}
// const c = {}


// debugger;

// function functionDec(){
//   console.log('inside a function declaration')
// }
//
// var functionExp = function(){
//   console.log('inside an anonymous function')
// }
//
// var arrowFunction = x => x+3

// var one = 1
//
// function firstFunction(){
//   var two = 2
//   secondFunction(two)
// }
//
// function secondFunction(num){
//   var three = 3
//   var someNum = three + num
// }
//
// firstFunction()

//var, //can re-declare and you can re-assign; has functional scope
//let, //cannot re-declare but you can re-assign; has block scope
//const //must be assigned during declaration, cannot re-declare it; cannot re-assign; has block scope

// var a = 'hello'
// var a = 'hey'
// a = 'suuuup'
//
// let b = 'hello'
// // let b = 'hey'
// b = 'suuuup'
//
// const c = 'hello'
// // c = 'hey'
//
// d = 'new varaible'
// debugger

// const ann = "ANNNNNNNN"
//
// function aFunction(){
//   if(true){
//     erin = 'erin'
//     var melanie = 'melanie'
//     let jake = 'jake'
//   }
//   const ann = 'ann'
//   anotherFunc()
// }
//
// function anotherFunc(){
//   console.log(ann)
// }
//
//
// aFunction()



//for, while
array = [1,2,3, 4, 5]
obj = {"key1": 1, "key2": 2, "key3": 3}
// for(let i = 0; i < arr.length; i++){
//   console.log(i)
// }

//for..of for array //go through the array elements themselves, can't use with obj

// for(let element of array){
//   console.log(element)
// }

//for..in for obj usually, but you can use them with arrays
//for arrays, go through their indexes
//for objs, go through their keys

// for(let index in array){
//   console.log(index)
// }
// for(const key in obj){
//   console.log(obj[key])
// }

// array.forEach(printMe)
//
// function printMe(element){
//   console.log(element)
// }

// console.log(array.map(   element => element*10  ))
// console.log(array.map(multipleByTen))
//
// function multipleByTen(element){
//   return element * 10
// }

array = [{name: "Ann", age: 25}, {name: "Paul", age: 20}]

let filteredArray = array.filter( element => element.age > 21  )
console.log(array.filter( element => element.age > 21  ).map(  obj => obj.name))





//
