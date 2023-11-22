var botao = document.querySelector(".botão")
botao.addEventListener("mousedown" ,mousedown);

function mousedown(){
    botao.addEventListener("mousemove",mousemove);
    botao.addEventListener("mouseup",mouseup);
function mousemove(e){
    var x = e.clientX -50 +"px";
    var y = e.clientY -50 +"px";
    this.style.left = x;
    this.style.top = y;
}

function mouseup(){
    botao.removeEventListener("mousemove",mousemove)
}
}