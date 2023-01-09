const board = document.querySelector('.board');


populateBoard();

function populateBoard() {
    // create horizontal divs
    for (let i = 0; i < 16; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('.rowDiv');

        rowDiv.style.height = "6.25%";
        rowDiv.style.width = "100%";

        board.appendChild(rowDiv);
    }

    // console.log(board);
    rowDivs = board.querySelectorAll('.rowDiv');
    
    

    // populate horizontal divs with squares

}