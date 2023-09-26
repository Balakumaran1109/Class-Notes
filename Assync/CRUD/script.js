var selectedRow = null;

function onSubmit(event) {
  event.preventDefault();
  var formData = readData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateData(formData);
    selectedRow = null;
  }
  resetData();
}

function readData() {
  let data = {};

  data["ProductCode"] = document.getElementById("productCode").value;
  data["ProductName"] = document.getElementById("productName").value;
  data["Qty"] = document.getElementById("qty").value;
  data["Price"] = document.getElementById("price").value;
  return data;
}

function insertNewRecord(data) {
  let tableData = document
    .getElementById("tableData")
    .getElementsByTagName("tbody")[0];

  let newRow = tableData.insertRow();

  let cell1 = newRow.insertCell();
  cell1.innerText = data.ProductCode;

  let cell2 = newRow.insertCell();
  cell2.innerText = data.ProductName;

  let cell3 = newRow.insertCell();
  cell3.innerText = data.Qty;

  let cell4 = newRow.insertCell();
  cell4.innerText = data.Price;

  let cell5 = newRow.insertCell();
  cell5.innerHTML = `<button class="btn btn-info m-1" onClick = "editData(this)">Edit</button>
    <button onClick = "deleteData(this)" class="btn btn-danger">Delete</button>
    `;
}

function editData(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerText;
  document.getElementById("productName").value = selectedRow.cells[1].innerText;
  document.getElementById("qty").value = selectedRow.cells[2].innerText;
  document.getElementById("price").value = selectedRow.cells[3].innerText;
}

function updateData(data) {
  selectedRow.cells[0].innerText = data.ProductCode;
  selectedRow.cells[1].innerText = data.ProductName;
  selectedRow.cells[2].innerText = data.Qty;
  selectedRow.cells[3].innerText = data.Price;
}

function deleteData(td) {
  if (confirm("Do you want to delete this record?")) {
    let row = td.parentElement.parentElement;
    document.getElementsByTagName("table")[0].deleteRow(row.rowIndex);
  }
  resetData();
}

function resetData() {
  document.getElementById("productCode").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";
}

document.getElementById("submit-btn").addEventListener("click", onSubmit);
