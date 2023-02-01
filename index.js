const parentNode = document.querySelector('.sketchBoard');

function hover(e) {
    const color = document.querySelector(".colorPicker").value;
    e.target.style.backgroundColor = color;
}

function clearBoard() {
    const board = document.querySelectorAll(".sketchBoard>div")
    board.forEach(block => {
        block.style.backgroundColor = "white";
    });
}

for(let i = 0; i < (16*16); i++) {
    const div = document.createElement('div');
    const size = 400/16;

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = "white";

    div.onmouseover = hover;

    parentNode.appendChild(div);
}

