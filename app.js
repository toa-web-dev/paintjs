const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls_color")

canvas.width = 400;
canvas.height = 600;
ctx.strokeStyle = "#2c2c2c";                //기본 색상
ctx.lineWidth = 2.5;

let painting = false;                                                //painting이 true일때만 그림이 그려집니다.

function startPainting(){ painting = true; }

function stopPainting(){ painting = false; }

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    let color = event.target.style.backgroundColor
    ctx.strokeStyle = color 
    /**
     * this.ctx.strokeStyle = color 를 하면
     * app.js:30 Uncaught TypeError: Cannot set properties of undefined (setting 'strokeStyle')
     * at HTMLDivElement.handleColorClick
     * 위의 오류가 나는 이유 알아낼 것
    */
}

if(canvas){ 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    /*
     * canvas가 존재하면 이벤트리스너 생성
     * canvas.addEventListener("이벤트리스너 이름" , 함수);
    */
}
Array.from(colors).forEach(color => color.addEventListener("click",handleColorClick))