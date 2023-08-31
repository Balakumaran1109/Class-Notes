function calculator(operation){

    let number_1 =  Number(prompt("Enter a value for Number 1"));
    let number_2 = Number(prompt("Enter a value for Number 2"));

    let result;

    switch(operation){
        case "add":
           result = number_1 + number_2;
           break;

         case "sub":
            result = number_1 - number_2;
            break;

         case "mul":
            result = number_1 * number_2;
            break;

        case "div":
            result = number_1 / number_2;
            break;

        default : 
            result = "invalid operation";
    }

    let msg = confirm("Do you want to show the result")

    if(msg){
        document.getElementById('result1').innerText = result.toFixed(2);
    }
    else{
        document.getElementById('result1').innerText = "Result cannot be displayed"
    }
    
}


let addElement = document.getElementById("add");
addElement.addEventListener("click", function (){
    calculator("add");
});
 
let subElement = document.getElementById("sub");
subElement.addEventListener("click", function (){
    calculator("sub");
});

let mulElement = document.getElementById("mul");
mulElement.addEventListener("click", function (){
    calculator("mul");
});

let divElement = document.getElementById("div");
divElement.addEventListener("click", function (){
    calculator("div");
});