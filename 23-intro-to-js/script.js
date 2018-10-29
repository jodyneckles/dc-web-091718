// let  name = 'ann'
// let project = 'mod 3 project'
//
// debugger
//
//
// var a = 'a'
// var num = 1+1
// debugger
// var hi = 'hello'

//
// var obj = {key:"value"}
// undefined
// obj.key
// "value"
// obj.key2 = "value2"
// "value2"
// obj
// {key: "value", key2: "value2"}
// var arr = [1,2,3,4]
// undefined
// arr
// (4) [1, 2, 3, 4]
// arr.thisIsAKey = "thisIsAValue"
// "thisIsAValue"
// arr
// (4) [1, 2, 3, 4, thisIsAKey: "thisIsAValue"]
// arr.thisIsAKey
// "thisIsAValue"
// function sayHi(){
// 	console.log("hello")
// }
// undefined
// sayHi()
// VM1732:2 hello
// undefined
// sayHi
// ƒ sayHi(){
// 	console.log("hello")
// }
// obj
// {key: "value", key2: "value2"}
// sayHi
// ƒ sayHi(){
// 	console.log("hello")
// }
// sayHi.keyHi = "hello ann"
// "hello ann"
// sayHi()
// VM1732:2 hello
// undefined
// sayHi.keyHi
// "hello ann"

//Primitive data
// let before = 2
//
// function timesTwo(num){
//   return num * 2
// }
//
// let after = timesTwo(before)

//object data
let data = {num: 2}

function timesTwo(obj){
  obj.num = obj.num * 2
  return obj
}
timesTwo(data)

// let after = timesTwo(before)



















//
