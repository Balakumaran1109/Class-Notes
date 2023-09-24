let data = [
    {name: "John", age: 20},
    {name: "David", age: 23},
]

function displayData(){
    let dataRows = document.getElementById("inputData");
    dataRows.innerHTML = "";

    data.forEach((value, index)=>{
        let row = `<tr>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td><button class="btn btn-info edit" data-index="${index}">Edit</button>
        <button class="btn btn-danger delete" data-index="${index}">Delete</button></td></tr>`;

        dataRows.insertAdjacentHTML("beforeend", row)
    })
    
}

displayData()  


function formSubmit(event){
    event.preventDefault();

    let nameInput = document.getElementById("name");
    let ageInput = document.getElementById("age");

    let name = nameInput.value;
    let age = ageInput.value;

    data.push({name, age})

    nameInput.value = "";
    ageInput.value = "";

    displayData()

}

function editData(event){
    let index = event.target.getAttribute("data-index");
    let editData = data[index];

    let nameInput = document.getElementById("name");
    let ageInput = document.getElementById("age");

    nameInput.value = editData.name;
    ageInput.value = editData.age;

    data.splice(index, 1);

    displayData();
}

function deleteData(event){
    let index = event.target.getAttribute("data-index");
    
    data.splice(index, 1);

    displayData();
}

document.getElementById("form").addEventListener("submit", formSubmit)

document.getElementById("inputData").addEventListener("click",(event)=>{
    if(event.target.classList.contains("edit")){
        editData(event)
    }
    else if(event.target.classList.contains("delete")){
        deleteData(event)
    }
})