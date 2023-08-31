function clearScreen(){

document.getElementById("result").value = ''

}


function input(val){

    document.getElementById("result").value = document.getElementById("result").value + val;

    return val
}



function output(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y
    return
}
