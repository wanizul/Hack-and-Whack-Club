// get selected row
// display selected row data in text input

var table = document.getElementById("table"), rIndex;

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
        rIndex = this.rowIndex;
        console.log(rIndex);

        document.getElementById("name").value = this.cells[1].innerHTML;
        document.getElementById("ic").value = this.cells[2].innerHTML;
        document.getElementById("email").value = this.cells[3].innerHTML;
        document.getElementById("class").value = this.cells[4].innerHTML;
        document.getElementById("mNumber").value = this.cells[5].innerHTML;
    };
}


// edit the row
function editRow() {
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("name").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("ic").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("email").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("class").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("mNumber").value;
}

// Data Update Table Here
function editTableDisplay() {
    document.querySelector('.editTable').setAttribute('style', 'display: block;')
}

// Search
function searchData() {
    let data = document.getElementById("table").getElementsByTagName("td");
    let searchBox = document.getElementById("searchBox");
    let a = document.getElementById("nameSearch");
    let b = document.getElementById("icSearch");
    let c = document.getElementById("emailSearch");
    let d = document.getElementById("classSearch");
    let e = document.getElementById("telephoneSearch");

    //insert data into array student
    for (let i = 2; i < data.length; i++) {
        if (searchBox.value == parseFloat(data[i].innerHTML)) {
            a.value = data[i - 1].innerHTML;
            b.value = data[i].innerHTML;
            c.value = data[i + 1].innerHTML;
            d.value = data[i + 2].innerHTML;
            e.value = data[i + 3].innerHTML;
            //console.log(data[i-1]);
        }
        i = i + 5;
    }
}

document.getElementById("searchBtn").onclick = function () {
    searchData();
}

// Delete
function deleteData() {
    let data = document.getElementById("table").getElementsByTagName("td");
    let deleteBox = document.getElementById("deleteBox");

    for (let i = 2; i < data.length; i++) {
        if (deleteBox.value == parseFloat(data[i].innerHTML)) {
            data[i + 3].remove();
            data[i + 2].remove();
            data[i + 1].remove();
            data[i].remove();
            data[i - 1].remove();
        }
    }
    
}

document.getElementById("deleteBtn").onclick = function () {
    deleteData();
}