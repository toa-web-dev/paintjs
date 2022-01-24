const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;
ctx.strokeStyle = "#2c2c2c";
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