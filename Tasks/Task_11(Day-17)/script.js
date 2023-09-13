let container = document.createElement("div");
container.setAttribute("id", "container");
container.innerHTML = `<div class="card" style="width: 18rem;"><li style = "text-align:center" class="list-group-item">An item</li>
<img src='https://flagcdn.com/w320/in.png' class="card-img-top" alt="...">
<div class="card-body">
  <p id = "capital" class="card-text"></p>
</div>
</div>`
document.body.append(container);



let url = "https://restcountries.com/v3.1/all";

fetch(url).then((response)=>{
    if(response.status === 200){
    return response.json(); 
}
})
.then((val)=>{
    // var capitalEle = document.getElementById("capital").value;
    for(i of val){
        if(i.name.common === "India")
        console.log(i.capital );
    }
    
})
.catch((err)=>{
    console.log(err);
});

