// global array of input field DOM elements 
let height = 0;
let width = 0;
let grid = [];

function LoadData() {

    let filePicker = document.getElementById("filePicker");
    let file = filePicker.files[0];
    Plotly.d3.csv(file.path, function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }

        let z1 = [];

        for (i = 0; i < rows.length; i++) {
            z1.push(unpack(rows, i));
        }

        arrayHeight = z1.length;
        if (arrayHeight == 0) {
            arrayWidth = 0;
        } else {
            arrayWidth = z1[0].length;
        }
        document.getElementById("height_input").value = arrayHeight;
        document.getElementById("width_input").value = arrayWidth;
        updateTableContainer(false);

        for (i = 0; i < grid.length; i++) {
            for (j = 0; j < grid[0].length; j++) {
                grid[i][j].value = z1[i][j];
                grid[i][j].style.color = "black";
            }
        }
    });
}
function SaveFile() {
    let z1 = [];
    for (i = 0; i < grid.length; i++) {
        z1[i] = [];
        for (j = 0; j < grid[0].length; j++) {
            z1[i][j] = grid[i][j].value;
        }
    }
    var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
    saveAs(z1);
}
function clearData() {
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            grid[i][j].value = "0";
            grid[i][j].style.color = "black";
        }
    }
}

function updateTableContainer(focus) {
    let valid = true;
    let tableContainer = document.getElementById("tableContainer");
    let newHeight = parseInt(document.getElementById("height_input").value);
    let newWidth = parseInt(document.getElementById("width_input").value);
    if (isNaN(newHeight) || newHeight == 0) {
        document.getElementById("height_input").value = "please input a non-zero height."
        valid = false;
    }
    if (isNaN(newWidth) || newWidth == 0) {
        document.getElementById("height_input").value = "please input a non-zero width."
        valid = false;
    }
    if (valid) {
        let newGrid = [];
        let oldTable = document.getElementById("inputTable");
        let newTable = document.createElement("table");
        newTable.id = "inputTable";
        if (newWidth > 10) {
            tableContainer.style = "overflow-x: scroll";
        } else {
            tableContainer.style = "";
        }
        for (i = 0; i < newHeight; i++) {
            let row = document.createElement("tr");
            newGrid[i] = [];
            for (j = 0; j < newWidth; j++) {
                let td = document.createElement("td");
                let input = document.createElement("input");
                input.style.border = "1px solid black;";
                input.style.color = "red";
                input.type = "text";
                input.id = j + ", " + i;
                input.addEventListener("focusin", function () {
                    input.style.color = "black";
                    if (input.value.includes(',') || input.value.includes("invalid")) {
                        input.value = '';
                    }
                });
                input.addEventListener("focusout", function () {
                    if (input.value.includes(',') || input.value.includes("invalid") || isNaN(parseFloat(input.value))) {
                        input.style.color = "red";
                    }
                    if (input.value === "") {
                        input.value = input.id;
                    }
                });
                if (i < height && j < width) {
                    if (grid[i][j] != null) {
                        input.value = grid[i][j].value;
                        if (!isNaN(parseFloat(input.value)) && !input.value.includes(","))
                            input.style.color = "black";
                    }
                } else {
                    input.value = input.id;
                }
                td.appendChild(input);
                if (parseInt(input.width) < 58) {
                    input.width = "58";
                }
                row.appendChild(td);
                newGrid[i][j] = input;
            }
            newTable.appendChild(row);
        }
        tableContainer.appendChild(newTable);
        if (oldTable != null) {
            oldTable.remove();
        }
        grid = newGrid;
        height = newHeight;
        width = newWidth;
        if (focus) {
            grid[0][0].focus();
        }
    }
}