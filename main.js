let newball = new ball();
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

function render() {
    context.clearRect(0,0,canvas.width, canvas.height);	
    context.beginPath();
    context.arc(canvas.width/2,canvas.height/2,newball.width/2,0,360*Math.PI/180,true)
    context.closePath();
    context.fill();
    console.log("hfudsfdsf");
}
setInterval(render, 1000/60);