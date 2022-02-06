function createMultiplicationTable(rows, columns){
    let html = '<table>';
        
    for(let row = 0; row < rows; row++) {
        html = html + '<tr>';
            for (let col = 0; col < columns; col++){
                html = html + `<td>${(row +1) * (col +1)}</td>`
            };
        html = html + '</tr>';
    }


    html = html + '</table>';
    return html;
}

function onGeneratePress(){
    let rowsInput = document.getElementById('rows-input').value;
    let colInput = document.getElementById('columns-input').value;
    // document object can be used to get the element when the button is pressed
    // convert the input from string to number
    let rows = Number(rowsInput);
    let columns = Number(colInput);

    if (!isNaN(rows) && !isNaN(columns)) {
        let tableHTML = createMultiplicationTable(rows, columns);
        document.write(tableHTML);
        // document is HTML object to display HTML
    } else {
        alert('Error: Invalid input')
    }

}    