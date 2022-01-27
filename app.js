const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls_color")
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")
const INITIAL_COLOR = "#2c2c2c"     //  기본 색상

canvas.width = 400;
canvas.height = 600;
ctx.strokeStyle = INITIAL_COLOR 
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

//  --------------------function--------------------

function startPainting() { painting = true }

function stopPainting()  { painting = false }

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!filling){
        if (!painting) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}

function handleRangeChange(event) {
    let size = event.target.value
    ctx.lineWidth = size
}

function handleModeClick(event) {
    if (!filling) {
        filling = true
        mode.innerText = "Paint"
    } else {
        filling = false
        mode.innerText = "Fill"
    }
}

function handleCanvasClick(event){
    if(filling){
        ctx.fillRect(0,0,canvas.width,canvas.height)
    }
}

function handleColorClick(event) {
    let color = event.target.style.backgroundColor
    ctx.strokeStyle = color
    ctx.fillStyle = color
    /**
     * this.ctx.strokeStyle = color 를 하면
     * app.js:30 Uncaught TypeError: Cannot set properties of undefined (setting 'strokeStyle')
     * at HTMLDivElement.handleColorClick
     * 위의 오류가 나는 이유 알아낼 것
     */
}


//  --------------------eventListener--------------------

if (range) {
    range.addEventListener("input", handleRangeChange)
}

if (mode) {
    mode.addEventListener("click", handleModeClick)
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
    canvas.addEventListener("click", handleCanvasClick)
    /*
     * canvas가 존재하면 이벤트리스너 생성
     * canvas.addEventListener("이벤트리스너 이름" , 함수);
     */
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))