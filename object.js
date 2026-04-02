canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

function ball() {
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 50;
    this.height;
    this.color;
    this.force;
    this.vx = 3;
    this.vy = 3;

}