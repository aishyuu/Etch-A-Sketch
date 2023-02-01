const parentNode = document.querySelector('.sketchBoard');

function getOptionValue(options) {
    for(let i = 0; i < options.length; i++) {
        if(options[i].checked) {
            return options[i].value;
        }
    }
}

function hover(e) {
    const color = document.querySelector(".colorPicker").value;
    const options = document.getElementsByName('actionOption')
    const optionChosen = getOptionValue(options);
    console.log(optionChosen);
    
    switch(optionChosen) {
        case "color":
            e.target.style.backgroundColor = color;
            break;
        case "eraser":
            e.target.style.backgroundColor = "white";
            break;
        case "rainbow":
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            e.target.style.backgroundColor = `#${randomColor}`;
            break;
    }
    
    
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

