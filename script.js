let objects = [];
let wires = {};
let tool = "wire";
let wire_id = 0;

function Start() {

}

function Update() {
	// Tools
	if(GetKey("1")) {
		tool = "wire";
	}
	if(GetKey("2")) {
		tool = "pin";
	}


	for(const object of objects) {
		if(object.type == "pin") {
			DrawCircle(object.x, object.y, 15, "blue");
		}
	}
	
	if(typeof scale != "undefined") {
		for(let y=0; y < scale; y++) {
			for(let x=0; x < scale; x++) {
				DrawCircle(x*grid_size, y*grid_size, 2, "black");
			}
		}
	}

	for(const [id, wire] of Object.entries(wires)) {
		let last_point = wire.starting_point;
		while(last_point.connection != undefined) {
			DrawLine(last_point.connection.x, last_point.connection.y, last_point.x, last_point.y, "black", 3);
			last_point = last_point.connection;
		}
	}
}