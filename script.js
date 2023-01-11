const board = document.querySelector('.board');
const changeGridSize = document.querySelector('.change-grid-button');

populateBoard();


changeGridSize.addEventListener("click", function() {
    const gridSize = prompt("What size grid would you like?");
    populateBoard(gridSize);
});



/*
    populates the board with plain, white tiles
*/
function populateBoard(gridSize=16) {
    board.innerHTML = "";
    let rowDivHeight = ((800 / gridSize)*100) / 800;
    let dimensionPercent = Math.round(rowDivHeight*100) / 100;

    // populate the board with horizontal container divs
    for (let i = 0; i < gridSize; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('.rowDiv');

        rowDiv.style.height = `${dimensionPercent}%`;
        rowDiv.style.width = "100%";
        rowDiv.style.display = "flex";

        board.appendChild(rowDiv);        
    }

    // for each horizontal div, populate it with square tiles
    const rowDivs = board.childNodes;
    rowDivs.forEach(function() {
        for (let i = 0; i < rowDivs.length; i++) {
            let horizontalDivs = rowDivs[i];
            let tile = document.createElement('div');
            tile.classList.add('.tile');

            tile.style.height = "100%";
            tile.style.width = `${dimensionPercent}%`;
            tile.style.backgroundColor = "white";

            horizontalDivs.appendChild(tile);
        }
    });

    addTileEventListeners();
}

/*
    adds event listeners to the tiles inside of the board
*/
function addTileEventListeners() {
    const tileRow = board.childNodes;

    for (let i = 0; i < tileRow.length; i++) {
        let tiles = tileRow[i].childNodes;

        for(let j = 0; j < tiles.length; j++) {
            let tile = tiles[j];
            tile.addEventListener("mouseenter", function(event) {
                tile.style.backgroundColor = "gray";
            });
        }
    }
}