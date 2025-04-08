// Strings
// let myName: string = 'Aryan Kadyan'
// myName = 'something other person'
// console.log(myName)

// Numbers
// let favNumber: number = 8;
// console.log(favNumber)

//Boolean
// let tsHard: boolean = false;
// tsHard = true
// console.log(tsHard)

// Type Inference [Inferring]

// let tech = 'TypeScript'
// let favNumber = 12
// let tsHard = true;

// console.log(typeof tech);
// console.log(typeof favNumber);
// console.log(typeof tsHard);


// Any Type

// let color: any = 'aqua'
// color = 20
// color = true
// console.log(color)

// Regular Function

// function addOne(num:number){
//     return num + 1
// }
// const result = addOne(3)
// console.log(result)

// Arrow Function

// const double = (x: number, y: number)=> x * y
// const res = double(2, 11)
// console.log(res)


// Default Params Value

// function greet(person = 'Anonoymous'){
//     return `Hello ${person}`
// }
// const res1 = greet('Aryan')
// console.log(res1)

// Return Annotations
// regular function
// function double1(x: number) : number{
//   return x * x
// }
// const res = double1(2)
// console.log(res)

// using arrow function
// const double2 = (x : number) : number => x * x
// const res2 = double2(2)
// console.log(res2)
// OR
// console.log(double2(2))

// Void in TypeScript
// function printMessage(message: string) : void {
//    console.log(`This is my ${message}`)
// }
// printMessage('message')


// Never Keyword
// function throwError(msg: string) : never {
//     throw new Error(msg)
// }
// function infiniteLoop() : never {
//    while(true){}
// }
// let x : never;

// function neverReturns() : never {
//   while(true){}
// }

// x = neverReturns()


// Arrays Types 
// [] Notation
//const nums : number[] = [1,2,8,9];
//const str : string[] = ["one", "two", "three"]
//console.log(str)

// Array <type> Notation
//const items: Array<number> = [1,8,16]
//console.log(items);

// Multi-Dimensional Arrays
// const singleDigit : number[] = [1,2,3,4,5]
// const multiDigit: number[][] = [[1,2,3,4,5]]
// const tripleDigit: number[][][] = [[[1,2,3,4,5]]]

// console.log(singleDigit)
// console.log(multiDigit)
// console.log(tripleDigit)

// Objects
// Define a person Object
// const person : {firstName: string; lastName: string; age: number} = {
//    firstName : 'Aryan',
//    lastName: 'Kadyan',
//    age: 20,
// }

// console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

// -------------
// function printUser() : {name: string; age: number; location: string}{
//    return {
//        name: 'Aryan',
//        age: 20,
//        location: 'Bharat'
//    }
// }

// const res = printUser()
// console.log(res) 

// Type Aliases
// type User = {
//     name: string  
//     age: number
//     location: string
// }
// const printUserInfo = (user: User)=>{
//   return `Name: (${user.name}) Age: (${user.age})
//   Location: (${user.location})`
// };

// const res1 = printUserInfo({ name: "Aryan", age: 20, location: "Aryan"})
// console.log(res1)

// Optional Properties
// type User = {
// name: string
// age?: number
// readonly location: string
// }
// const user: User = {
//   name: 'Aryan',
//   age: 20,
//  location: 'Bharat',
// }

// user.name = 'Abbe Bol Na'

// console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`)


// Intersection Types
//type UserInfo= {
//  firstname: string
//  lastname: string
//   age: number 
// }
// type AccountDetails = {
//   email: string
//   password: string
// }

// type User = UserInfo & AccountDetails

// const aryan: User = {
//  firstname: "Aryan",
//  lastname: 'Kadyan',
//  age: 20,
//  email: 'kadyanaryan744@gmail.com',
//  password: 'password123',
// }

// console.log(
// `Name: ${aryan.firstname} ${aryan.lastname} Age: ${aryan.age}
// Email: ${aryan.email} Password: ${aryan.password}` 
// )


// Union Types
let password: string | number = 20

type UserInfo = {
  first: string
  last: string
  age: number
}

type AccountDetails = {
  email: string
  password: string
}

let user: UserInfo | AccountDetails = {
  email: 'balamsingh85@gmail.com',
  password: 'passsword1234',
}

const items: (number | string)[] = [1, 8, 8, 9, 'hello']
console.log(items)


// Literal Types 

// string literal
let color: 'aqua' | 'beige' | 'babul' | 'marine'
color = 'aqua'
color = 'babul'
//color = 'greenyellow'
console.log(color)

// boolean literal
let isTrue: true | false
isTrue = true;
//isTrue = 'string nhi chalega'

// numeric literal
let password1: 'secretpassword' = 'secretpassword'
//password1 = 'something else'
console.log(password1)

// Tuples 
let myTuple: [number, string]
myTuple = [8, 'kaise ho']
console.log(myTuple)

const products: (number | string)[] = ['item 1', 8]
console.log(products)

const games: [string, number, boolean] = ['Game 1', 8, true]
console.log(games)

// Enums
enum WeatherConditions {
  Sunny = 'sunnny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

const currentWeather = WeatherConditions.Snowy
console.log(`The current weather is ${currentWeather}`)


// OOP 
// Class Properties Annotations
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Aryan", 20)
console.log(person)


// Access Modifiers
class Human {
  private first: string
  public last: string
  protected age: number

  constructor(first: string, last: string, age: number) {
    this.first = first
    this.last = last
    this.age = age
  }

  getName(): string {
    return `${this.first} ${this.last} ${this.age}`
  }
}

class Person1 extends Human{
  constructor(first: string, last: string, age: number){
    super(first, last, age)
  }
}
const aryan = new Person1("Aryan", "WebDev", 20)
console.log(aryan)


// Getters an Setters
class MyClass {
  private _myProperty : number = 0

  get myProperty() : number{
    return this._myProperty
  }

  set myProperty(value: number){
    this._myProperty = value
  }
}

const myInstance = new MyClass() 

console.log(`Current Value: ${myInstance.myProperty}`)
myInstance.myProperty = 11;
console.log(`Current Value: ${myInstance.myProperty}`)


// Interfaces
interface Computer{
  name: string
  ram: number
  hdd: number
}

const computerExample : Computer = {
   name: 'i9',
   ram: 8,
   hdd: 100
}
console.log(computerExample.name)
console.log(computerExample.ram)
console.log(computerExample.hdd)

// Interfaces
interface Movie{
  readonly name: string
  ratings: number
   genra?: string
}

const movie1 : Movie ={
  name: "Avengers EndGame",
  ratings: 9,
  genra: "Action and Scifi"
}
console.log(movie1)

// Interfaces
// Interfaces for a function
interface MathOperation{
  (x: number, y: number): number;
}

const add : MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b
console.log(add(8,6))
console.log(subtract(88,8))

// Intefaces 
interface Person {
  firstName: string
  lastName: string
  name: string
  sayHello() : void
}

function greet(person: Person){
  console.log(`Hello, ${person.firstName} ${person.lastName}`)
  person.sayHello();
}
const abhit: Person ={
  firstName: "Abhit",
  lastName: "Kadyan",
  name: "Abhit Kadyan",
  age: 30,
  sayHello(){
    console.log('Hi There')
  }
}


const jai: Person={
  firstName: "Jai",
  lastName: "Kadyan",
  name: "Jai Kadyan",
  age: 13,
  sayHello(){
    console.log("Hi There")
  }
}

greet(abhit)
greet(jai)

//Interfaces
interface Song{
  songName: string
  singerName: string
  printSongInfo(songName: string, singerName: string): string
}

const song1 : Song ={
  songName: 'On the Floor',
  singerName: 'Jennifer Lopez',
  printSongInfo: (songName, singerName) => {
    return `Song: ${songName}, Singer: ${singerName}`
  },
}

console.log(song1.printSongInfo("On the Floor", "Jennifer Lopez"))

// Interface
interface MovieDetails{
  readonly name: string
  ratings: number
  printMovieInfo(name: string, price: number, ratings: number): string | number
}

interface MovieGenra extends MovieDetails{
  genra: string
}
const movie : MovieGenra = {
  name: 'Avengers EndGame',
  genra: 'Action and Scifi',
  ratings: 9,
  printMovieInfo(name: string, price: number, ratings : number) : string | number {
    return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`
  }
}

const res = movie.printMovieInfo('John Cena', 500, 8)
console.log(res)

// Interfaces
// Interfaces for classes
// interface Vehicle {
 //  start() : void;
 //  stop() : void
// }

// class Car implements Vehicle{
 //  start(): void{
 //    console.log("Car is starting...")
 //  }

//   stop(): void{
 //    console.log("Car is stopped")
 //  }
// }

//const myCar = new Car()
//myCar.start()
//myCar.stop()

// Declaration Merging
// Original Interface
interface Car{
  brand: string
  start() : void
}

// Declaration merging (interfaces extension)
interface Car {
  model: string
  stop(): void
}

const mySecondCar: Car = {
  brand: 'Aston Martin',
  model: 'DB12',
  start(){
    console.log('Start')
  },
  stop(){
    console.log('Stop')
  }
}

mySecondCar.start()
mySecondCar.stop()

// Generic Functions 
 
// Regular Function
function printNumber(item: number, defaultValue: number): [number, number]{
  return [item, defaultValue]
}

function printString(item: string, defaultValue: string): [string, string]{
  return [item, defaultValue]
}

function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean]{
  return [item, defaultValue]
}

const num = printNumber(8,9)
const str = printString('hello', 'baby')
const bool = printBoolean(true, false)
console.log(num)
console.log(str)
console.log(bool) 

// Generic Function 
function balamDataTypesFunction<Type>(item: Type, defaultValue: Type): [Type, Type]{
   return [item, defaultValue]
}

const num1 = balamDataTypesFunction<number>(8, 9);
const str1 = balamDataTypesFunction<string>('hello', 'baby')
const bool1 = balamDataTypesFunction<boolean>(true, false)
console.log(num1)
 console.log(str1)
 console.log(bool1)


// Generic Function 
// function uniqueDataTypesFunction<T>(item: T, defaultValue: T): [T, T]{
 //  return [item, defaultValue]
// }

// interface Dog {
//   name: string;
//   breed: string
// }

// const dog1 = uniqueDataTypesFunction<Dog>(
 //  {name: "Danger", breed: "Bull Dog"},
 //  {name: "Buddy", breed: "Labrador"}
// )

// console.log(dog1)

// Generic Functions

// to get a random key value pairs from an object
function getRandomKeyValuePair<T>(obj: {[key: string] : T}): {
  key: string
  value: T
}{
  const keys = Object.keys(obj)
  const randKey = keys[Math.floor(Math.random() * keys.length)]
  return {key: randKey, value: obj[randKey]}
}

const stringObject = { a: 'apple', b: 'banana', c: 'cherry'}
const randomStringPair = getRandomKeyValuePair<string>(stringObject)
console.log(randomStringPair)

const numberObject = { one: 1, two: 2, three: 3}
const randomNumberPair = getRandomKeyValuePair<number>(numberObject)
console.log(randomNumberPair)

// generic function that filter an array based on a condition
 function filterArray<T>(array: T[], condition: (item: T)=> boolean) : T[] {
  return array.filter((item)=> condition(item))
 }
 const numberArray = [1,2,3,4,5,6,7,8,9,10]
 const evenNumbers = filterArray<number>(numberArray, (num)=> num % 2 === 0)
 console.log(evenNumbers)

 const stringArr = ['apple', 'banana', 'cherry', 'date']
 const shortWords = filterArray<string>(stringArr, (word) => word.length < 6)
 console.log(shortWords)

 interface Fruit{
  name: string
  color: string
}

const fruitArray : Fruit[] =[
  {name: "Apple", color: "Red"},
  {name: "Banana", color: "Yellow"},
  {name: "Cherry", color: "Red"},

]

const aquaFruits = filterArray<Fruit>
(fruitArray, 
  (fruit) => fruit.color === "Aqua")
console.log(aquaFruits)


function reversePair<T, U>(value1: T, value2: U):[U,T]{
  return [value2, value1]
}

const reversedPair = reversePair
("hello", 8)
console.log(reversedPair)

// Generic Classes

class Box<T>{
  private content: T;

  constructor(intitalContent: T){
    this.content = intitalContent
  }
  getContent(): T{
    return this.content;
  }
  setContent(newContent: T): void{
    this.content = newContent
  }
}

// const stringBox = new Box<string>("Hello, TypeScript")
// console.log(stringBox.getContent())

// stringBox.setContent("New Content Added")
// console.log(stringBox.getContent())

const numberBox = new Box<number>(8)
console.log(numberBox.getContent())
numberBox.setContent(100);
console.log(numberBox.getContent())


// Type Narrowing

// 1. Type guards
type MyType = string | number

function exampleFunction(value: MyType): void{
  if(typeof value === 'string'){
    console.log(value.toUpperCase())
  } else {
    console.log(value.toFixed(2))
  }
}

exampleFunction('hello bro') // HELLO BRO
exampleFunction(20) // 20.00

// 2. instanceof Operator
class Dog{
  bark() : void{
    console.log('Woff Woff')
  }
}

class Cat{
  meow() : void{
    console.log('Meow')
  }
}

function animalSound(animals: Dog | Cat): void{
  if(animals instanceof Dog){
    animals.bark()
  } else {
    animals.meow()
  }
}

const myDog = new Dog()
const myCat = new Cat()

animalSound(myDog) // Woff Woff
animalSound(myCat) // Meow

// 3. intersectionof Types
type Employee = {
  id: number
  name: string
}

type Manager = { 
    department: string
    role: string
}

type ManagerWithEmployeeInfo = Employee & Manager

const manager : ManagerWithEmployeeInfo={
  id: 888,
  name: 'Aryan Kadyan',
  department: 'Engineering',
  role: "Team Lead"
}

console.log(manager.id)
console.log(manager.name)
console.log(manager.department)
console.log(manager.role)

// declaration files

// just hold press on Ctrl and click document, you will see the declartion file
// lib.dom.d.ts
console.log(document)


