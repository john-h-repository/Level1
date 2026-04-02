let newball = new ball();
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	
hit = 0;

function animate() {
    context.clearRect(0,0,canvas.width, canvas.height);	
    context.beginPath();
    newball.x += newball.vx;
    newball.y += newball.vy; 
    // if (Math.abs(newball.vx) > 3 || Math.abs(newball.vy) > 3) {
    //     if (Math.abs(newball.vx) > 3) newball.vx += (0.007 * Math.abs(newball.vx));
    //     if (newball.vx < 3) newball.vx += (0.007 * Math.abs(newball.vx));
    //     if (newball.vy > 3) newball.vy -= (0.007 * Math.abs(newball.vy));
    //     if (newball.vy < 3) newball.vy += (0.007 * Math.abs(newball.vy));
    // } else {
    //     newball.vx = 3 * Math.sign(newball.vx);
    //     newball.vy = 3  * Math.sign(newball.vy);
    // }
    // console.log("x = "+newball.vx)
    // console.log("y = " +newball.vy)
    if ((newball.x+newball.width >= canvas.width) || (newball.x-newball.width <= 0)) {
        // newball.vx = (Math.floor(Math.random() * 3) + 3) * Math.sign(newball.vx);
        newball.vx = -newball.vx
        context.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        hit += 1
        document.getElementById("count").innerText = "Total hits: " + hit
    }
    if ((newball.y+newball.width >= canvas.height) || (newball.y-newball.width <= 0)) {
        // newball.vy = (Math.floor(Math.random() * 3) + 3) * Math.sign(newball.vy);
        newball.vy = -newball.vy
        context.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        hit += 1
        document.getElementById("count").innerText = "Total hits: " + hit
    }
    context.arc(newball.x,newball.y,newball.width,0,360*Math.PI/180,true)
    context.closePath();
    context.fill();
}
setInterval(animate, 1000/60);