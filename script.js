const board = document.querySelector('.board');

populateBoard();



function populateBoard() {
    // create horizontal divs
    for (let i = 0; i < 16; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add(`.rowDiv${i+1}`);

        rowDiv.style.height = "6.25%";
        rowDiv.style.width = "100%";
        rowDiv.style.display = "flex";

        board.appendChild(rowDiv);

        
    }

     // populate horizontal divs with squares
    const rowDivs = board.childNodes;
    rowDivs.forEach(function() {
        for (let i = 0; i < rowDivs.length; i++) {
            let horizontalDivs = rowDivs[i];
            let tile = document.createElement('div');
            tile.classList.add('.tile');

            tile.style.height = "100%";
            tile.style.width = "6.25%";
            tile.style.backgroundColor = "white";

            horizontalDivs.appendChild(tile);
        }
    });

}

