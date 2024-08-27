let mouse_down = false;
let mouseX = 0;
let mouseY = 0;
let scale = 50;
let grid_size = width/scale;

document.addEventListener("mousedown", (event) => {
	mouse_down = true;
	if(tool == "wire") {
		let next_id = Object.keys(wires).length - 1;
		if(next_id) {
			wire_id = next_id;
		} else {
			wire_id = 0;
		}
		let x = Math.round(event.x/grid_size) * grid_size;
		let y = Math.round(event.y/grid_size) * grid_size;
		wires[wire_id] = {starting_point: {x: x, y: y}, connection: undefined};
	} else if(tool == "pin") {
		objects.push({type: tool, x: event.x, y: event.y});
	}
});

document.addEventListener("mouseup", (event) => {
	mouse_down = false;
});

document.addEventListener("mousemove", (event) => {
	mouseX = event.x;
	mouseY = event.y;
	if(mouse_down == true) {
		if(tool == "wire") {
			let x = Math.round(mouseX/grid_size) * grid_size;
			let y = Math.round(mouseY/grid_size) * grid_size;
			let last_point = wires[wire_id].starting_point;
			let last_last_point = undefined;
			while(last_point.connection != undefined) {
				last_last_point = last_point
				last_point = last_point.connection;
			}
			if(last_point.x == x && last_point.y == y) {
				if(last_last_point != undefined) {
					if(last_last_point.x == x && last_last_point.y == y) {
						return;
					}
				}
			}
			console.log(wires[wire_id])
			last_point.connection = {x: x, y: y, connection: undefined};
		}
	}
});