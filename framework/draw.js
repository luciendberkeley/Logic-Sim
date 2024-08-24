function DrawLine(x1, y1, x2, y2, color, width=1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke(); 
}

function DrawRect(x1, y1, x2, y2, color, fill=true) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    if(fill) {
        ctx.fillRect(x1, y1, x2-x1, y2-y1);
    } else {
        ctx.strokeRect(x1, y1, x2-x1, y2-y1);
    }
}

function DrawCircle(x, y, radius, color, fill=true, width=1) {
	ctx.lineWidth = width;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	if(fill == true) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
}