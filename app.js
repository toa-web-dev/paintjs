const canvas = document.getElementById("jsCanvas");

function stopPainting(){
    let painting = false; //painting이 true일때만 그림이 그려집니다.
}

function onMouseMove(event){
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x,y);
}

function onMouseDown(event){
    painting = true;
    //그림을 그림
}

function onMouseUp(event){
    stopPainting()
}

if(canvas){ 
    
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
    /** canvas가 존재하면 이벤트리스너 생성
     * canvas.addEventListener("이벤트리스너 이름" , 함수);
    */
}