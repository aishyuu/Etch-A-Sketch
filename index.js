const parentNode = document.querySelector('.sketchBoard');
let slider = document.querySelector("#myRange");
let boardRes = document.querySelector(".boardRes")

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
function boardSetup(res) {
    for(let i = 0; i < (res*res); i++) {
        const div = document.createElement('div');
        const size = 400/res;
    
        div.style.width = `${size.toFixed(8)}px`;
        div.style.height = `${size.toFixed(8)}px`;
        div.style.backgroundColor = "white";
    
        div.onmouseover = hover;
    
        parentNode.appendChild(div);
    }
}

function resChange() {
    const res = slider.value;
    boardRes.innerHTML = `${res} x ${res}`

    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
    boardSetup(res);
}

boardSetup(16);