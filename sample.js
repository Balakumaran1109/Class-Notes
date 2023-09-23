let str = "Balakumaran";

let input = str.toLowerCase();

let split = input.split("");



let vowels = ["a","e","i","o","u"]
split.forEach((value)=>{
    for(i of vowels)
    if(value.includes(i)){
        console.log(value)
    }
})