// // let var const (ES5 & ES6)
// let example = ()=>{
//     if(true){
//         var x = 10;
//         let y = 20;
//         const z = 30;

//         console.log("inner", x)
//         console.log("inner", y)
//         console.log("inner", z)
//     }
//     console.log("inner", x)
// }
// example()

// var ES5 = function(x){
//     return x * x;
// }

// console.log(ES5(2))


// const ES6 = (x)=>
//     x * x;
// console.log(ES6(3))


// let obj = {
//     name : "john",
//     age : 20,
//     details : function(){
//         console.log(`Name ${this.name}, Age ${this.age}`)
//     }
// }
// obj.details()


// lexical scoping

// let person = {
//     name : "Steve",
//     output : function(){
//         let value = ()=>{
//             console.log(this.name);
//         }
//         value();
//     }
// }
// person.output()


// spread operator

// let array = [1,2,3,4,5]

// function add(a,b,c,d){
//     return a + b + c + d;
// }
// console.log(add(...array))


// rest parameter

// function mul(...arr){
//     let result = arr.map(e=>e * 2);
//     return result
// }
// console.log(mul(1,2,3,4))


// array destructuring

// let array = [1,2,3];

// let [a,b,c] = array

// console.log(a,b,c)


// object destructuring

// let obj = {
//     name : "john",
//     age : "22"
// }

// let {name, age} = obj;

// console.log(name, age)


// object property shorthand

// let name = "john";
// let age = 22;

// let person = {name, age}

// console.log(person)


// closure

// function closure1(){
//     let count = 0;
//     function sum(){
//         count++;
//         console.log(count);
//     }
//     return sum;
// }
// let result = closure1();
// result();


for(let i=0; i<5; i++){
    setTimeout(()=>{
    },4000)

}
console.log(i)
