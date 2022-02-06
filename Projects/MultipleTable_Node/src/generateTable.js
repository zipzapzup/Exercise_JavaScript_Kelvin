export function createMultiplicationTable(rows, columns){
    let tableString = '';
    for(let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++){
                tableString = tableString + `${(row +1) * (col +1)}` + ' ';

            };
            tableString = tableString + '\n';
    }

    return tableString;
}

