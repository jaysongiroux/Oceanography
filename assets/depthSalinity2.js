import React from "react"

function getData(inp){
    let inputList = document.getElementById("inputList");

    if(inp === "DEPTH" )
        for (let r = 0; r < height; r++) {
            for (let c = 0; c < width; c++) {
                let temp = table.rows[r].cells[c].innerText;
                // console.log(c)
                //checks if the table is empty
                if(isNaN(parseFloat(temp))){
                    v[r][c] = 0
                }
                else{
                    v[r][c] = 0-parseFloat(temp);
                }
            }
        }
    else{
        for (let r = 0, n = table.rows.length; r < n; r++) {
            for (let c = 0, m = table.rows[r].cells.length; c < m; c++) {
                let temp = table.rows[r].cells[c].innerText;
                // console.log(c)
                //checks if the table is empty
                if(isNaN(parseFloat(temp))){
                    v[5-r][c] = 0
                }
                else{
                    v[5-r][c] = 0-parseFloat(temp);
                }
            }
        }
    }




    console.log(v);
    return v
}