const board = document.querySelector('.board');


populateBoard();

function populateBoard() {
    // create horizontal divs
    for (let i = 0; i < 16; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('.rowDiv');

        rowDiv.style.height = "6.25%";
        rowDiv.style.width = "100%";
        // rowDiv.style.backgroundColor = "lightcoral";

        board.appendChild(rowDiv);
    }

    // populate horizontal divs with squares
}