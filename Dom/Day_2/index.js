function calculator(operation){

    // let number_1 = Number(document.getElementById('num1').value);
    // let number_2 = Number(document.getElementById('num2').value);

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


    setTimeout(()=>{
        console.log("This msg will be displayed after 5 sec")
    },5000)

    setInterval(()=>{
        console.log("This msg will repeat every 3 sec once")
    },3000)
    
}


// calculator(operation)