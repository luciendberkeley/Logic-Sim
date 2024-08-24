const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

onresize = (event) => {
    width = (canvas.width = window.innerWidth);
    height = (canvas.height = window.innerHeight);
};

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

let background_color = "white";

function draw_loop() {
	Clear(true);
	Update();
	requestAnimationFrame(draw_loop);
	
    Update_Keys();
}

function Clear() {
	let style = ctx.fillStyle;
	ctx.fillStyle = background_color;
	ctx.fillRect(0, 0, width, height);
	ctx.fillStyle = style;
}

Start();
draw_loop();