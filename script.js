var selectedRow = null

function onFormSubmit() {
    
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }


function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["email"] = document.getElementById("email").value;
    formData["phno"] = document.getElementById("phno").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phno;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phno").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phno").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.phno;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
