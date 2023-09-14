let data = [{name:"john", age:22}, 
           {name:"David", age:20},
        ];


function displayData(){
    let dataRow = document.getElementById("inputData");
    dataRow.innerHTML="";
    data.forEach((value,index)=>{
        let addRow = `<tr>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td><button class="btn btn-info" data-index="${index}">Edit</button>
        <button class="btn btn-danger" data-index="${index}">Delete</button></td></tr>`;

        dataRow.insertAdjacentHTML("beforeend", addRow);
    });
}
    function formSubmit(event){
        event.preventDefault();
        
        let nameInput = document.getElementById("name"); 
        let ageInput = document.getElementById("age");

        let name = nameInput.value;
        let age = ageInput.value;
    
        data.push({name, age});
    
        nameInput.value = "";
        ageInput.value = "";
    
        displayData(); 
    
    }

    function editData(event){
        let index = event.target.getAttribute("data-index");
        let record = data[index];

        let nameInput = document.getElementById("name");
        let ageInput = document.getElementById("age");

        nameInput.value = record.name;
        ageInput.value = record.age;

        data.splice(index, 1);
        displayData();
    }

    function deleteData(event){
        let index = event.target.getAttribute("data-index");
        data.splice(index, 1);
        displayData();
    }



    let submit = document.getElementById("form");
    submit.addEventListener("submit", formSubmit);

    document.getElementById("inputData").addEventListener("click", (event)=>{
       if(event.target.classList.contains("btn-info")){
        editData(event);
       }
       else if(event.target.classList.contains("btn-danger")){
        alert("edit btn clicked");
       }
    });
displayData();

