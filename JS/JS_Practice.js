// class Movies{
//     constructor(input){
//         this.input = input
//         console.log("Displaying according to available years")
//     }
//     tamilMovies(){
//         if(this.input<=2023 & this.input>=1931)
//         return true
//         else
//         return false  
//     }

// }

// let result = new Movies(2020)
// console.log(result.tamilMovies())

// let a = 10;
// console.log(typeof(a))





// let time = new Date().getHours()

// if(time > 0 && time < 12){
//     console.log("Good Morning");
// }

// else if(time > 12 && time < 5) {
//     console.log("Good Afternoon")
// }

// else if(time > 5 && time < 8){
//     console.log("Good Evening")
// }

// else{
//     console.log("Good Night")
// }



//Mobile suggestion
//  let savingMoney = 5000

//  switch(true){
//     case(savingMoney <= 50000 && savingMoney > 10000):
//     console.log("Buy a Smartphone in top brands")
//     break;

//     case(savingMoney > 50000):
//     console.log("Buy a Iphone")
//     break;

//     case(savingMoney > 1000 && savingMoney < 10000):
//     console.log("Buy a normal mobile")
//     break;

//     default:
//         console.log("Not enough money")
//  }



//IIFE

// (function(a,b){
//     let c = (a+b);
//     console.log(c);
// })(10,20);


//arrow function

// let add = (num)=>{
//     let result = num * num;
//     console.log(result)
// }
// add(4)


//function scope - var

// function message(input){
//     if(true){
//     var result = ("this is the input recieved :" + " " + input)
//     console.log(result + " - " + "in if block")
//     }
//     else{
//         console.log(result)
//     }
    
// }
// message("hello world")

//Block scope - let & const

// function message(input){
//     if(true){
//     let result = ("this is the input recieved :" + " " + input)
//     }
//     console.log(result)
// }
// message("hello world")


//Spread Operator

// let array = [1,2,3,4,5]

// function addition(a,b,c){
//     return a + b + c
// }
// console.log(addition(...array))


//Rest operator

// function addition (...arr){
//     let sum = 0
//     for(i = 0; i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum
// } 
// console.log(addition(1,2,3,4,5,6))

// Array destructuring
// let array = [1,2,3,4,5]
// let [a,b,c,d,e] = array

// console.log(a,b,c)

//object destructuring

// let obj = {
//     name : "John",
//     age : 24,
//     gender : "male"
// }
// var {name, age ,gender} = obj

// console.log(age)

//object property shorthand

// let name = "john"
// let age = 22
// let address = { no : 34, st : "vhnn statusbar", city : "tn - 008"}
// let gender = "male"
// let eligible = true

// let obj = {name, age, address, gender, eligible}

// console.log(obj)


//prototype

// let obj1 = {name : "john", age : 24}
// let obj2 = {name : "David"}

// obj2.__proto__ = obj1

// console.log(obj2.age)

//Class

// class Details{
    
//     presentStudents(totalStudents,absentees){
//         let result = (totalStudents - absentees)
//         return result
//     }
// }

// let newObj = new Details()
// console.log("Present students" +" : "+ newObj.presentStudents(50,5))


//Constructor

// class Guvi{
//     constructor(input){
//         console.log("Welcome to guvi" + " " + input)
//     }
// }

// let classRep = new Guvi("FSD")

 
//this keyword

// let obj1 = {
//     name : "john",
//     age : 23,
//     details : function(){
//         console.log(" my name is " + this.name + " & my age is " + this.age)
//     }
// }
// obj1.details()

// Inheritance of class

// class Name{
//     getName(){
//         console.log("name" + " : " + "john")
//     }
// }

// class Age extends Name{
//     getAge(){
//         console.log("age" + " : " + 24)
//     }
// }

// let classRep = new Age()

// classRep.getName()



//Inheritance with constructor

// class Name{
//     constructor(){
//         console.log("name" + " : " + "john")
//     }
//     getName(){
//         console.log("gender" + " : " + "Male")
//     }
// }

// class Age extends Name{
//     constructor(){
//         super()
//         console.log("age" + " : " + 24)
//     }
//     getAge(){
//         console.log("DOB" + " : " + "11/02/1999")
//     }
// }

// let classRep = new Age()

// classRep.getName()
// classRep.getAge()

//Inheritance using constructor with this keyword

// class Name{
//     constructor(name){
//     this.name = name;
//     }
//     getName(){
//         console.log("My name is" + " " + this.name)
//     }
// }

// class Age extends Name{
//     constructor(name,age){
//     super(name)
//     this.age = age;
//     }
//     getAge(){
//         console.log("My age is" + " " + this.age)
//     }
// }

// let classObj = new Age("Rahul",24)
// classObj.getName(), classObj.getAge()



//setter and getter Method

// class Revaluation{
//     constructor(marks){
//         this.input = marks;
//     }

//     get marksObtained() {
//         return this.input
//     }

//     set revaulated(correctedMark) {
//         this.input = correctedMark;
//     }
// }

// let obj = new Revaluation(85)
// console.log(obj.marksObtained)
// obj.revaulated = 95;
// console.log(obj.marksObtained)


// Task6

// class Movie {
//     constructor(title, studio, rating = "PG") {
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }

//     static getPG(movieArray) {
//         return movieArray.filter(movie => movie.rating === "PG");
//     }
// }

// const movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
// const movie2 = new Movie("The Dark Knight", "Warner Bros.");
// const movie3 = new Movie("Finding Nemo", "Pixar", "G");

// const movies = [movie1, movie2, movie3];

// const pgMovies = Movie.getPG(movies);
// console.log(pgMovies);



//task

// class Person{
//     constructor(name, age, dob, mobile, email){
//         this.name = name;
//         this.age = age;
//         this.dob = dob;
//         this.mobile = mobile;
//         this.email = email;
//     }

//         getDetails(){
//             console.log(`Name : ${this.name}, Age : ${this.age}, DOB : ${this.dob}, Mobile : ${this.mobile}, Email : ${this.email}`)
//         }
//     }
//     let obj = new Person("john", 24, "22/12/1998", 8281769984, "john22@gmail.com")
//     obj.getDetails()


//task for uber price

// class UberPriceCalculator{
//     constructor(basefare, costPerKm, costPerMin){
//     this._basefare = basefare;
//     this._costPerKm = costPerKm;
//     this._costPerMin = costPerMin;
//     }

//     rateCalculator(totalKm, totalDuration){
//        let distanceFare = this._costPerKm * totalKm;
//        let durationFare = this._costPerMin * totalDuration;

//        let totalFare = this._basefare + distanceFare + durationFare;
//         return "Total ride fare is : " + totalFare + " " + "rs";
//     }
// }

// let calculator = new UberPriceCalculator(50, 10, 1)

// console.log(calculator.rateCalculator(15, 30))



//task UML diagram circle

// class Circle {
//     constructor(radius, color){
//         this._radius = radius;
//         this._color = color;
//     }

//     get radius(){
//         return this._radius;
//     }

//     set radius(radius){
//         this._radius = radius;
//     }

//     get color(){
//         return this._color;
//     }

//     set color(color){
//         this._color = color;
//     }

//     tostring(){
//         return `Circle radius : ${this._radius} , color : ${this.color}`
//     }

//     getArea(){
//         let Area = Math.PI * this._radius * this._radius
//         return Area.toFixed(2)
//     }

//     getCircumference(){
//         let Circumference = 2 * Math.PI * this._radius
//         return Circumference.toFixed(2)
//     }
    
// }

// let objCircle = new Circle(1,"red");
// console.log(objCircle.tostring())
// console.log(objCircle.getArea())
// console.log(objCircle.getCircumference()) 

// objCircle.radius = 5;
// objCircle.color = "blue";

// console.log(objCircle.tostring())
// console.log(objCircle.getArea())
// console.log(objCircle.getCircumference()) 







    //map method

    // let array = [1,2,3,4,5,6]
    // let output = array.map((number)=> number * 2)
    // console.log(output)


    // let array1 = [1,2,3,4,5,6]
    // let filterOutput = array.filter((num)=> num %2 !== 0)
    // console.log(filterOutput)

    // let array2 = ["madam", "racecar", "hello", "radar"]
    // let palindromes = array2.filter((string)=> {
    //     let reversed = string.split('').reverse().join('')
    //     return string === reversed
                 
    // })
    // console.log(palindromes)


//reduce

let array = [1,2,3,4]
let total = array.reduce((e1,e2) =>{
    return e1 + e2
})
    console.log(total)