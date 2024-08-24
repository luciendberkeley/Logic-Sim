let pressed_keys = {};
let last_pressed = {};

document.addEventListener("keydown", (event) => {
	pressed_keys[event.key] = {"pressed": true, "keydown": true, "keyup": false};
});

document.addEventListener("keyup", (event) => {
	pressed_keys[event.key] = {"pressed": false, "keydown": false, "keyup": true};
});

function GetKey(keycode) {
	if(pressed_keys[keycode]) {
		return pressed_keys[keycode].pressed;
	} else {
		return false;
	}
}

function GetKeyDown(keycode) {
	if(pressed_keys[keycode]) {
		return pressed_keys[keycode].keydown;
	} else {
		return false;
	}
}

function GetKeyUp(keycode) {
	if(pressed_keys[keycode]) {
		return pressed_keys[keycode].keyup;
	} else {
		return false;
	}
}

function Update_Keys() {
	let keys = Object.keys(pressed_keys);
	// Make sure that keyups and keydowns are cleared
	for(let i=0; i < keys.length; i++) {
		if(pressed_keys[keys[i]].keydown == last_pressed[keys[i]].keydown) {
			pressed_keys[keys[i]].keydown = false;
		}
		if(pressed_keys[keys[i]].keyup == last_pressed[keys[i]].keyup) {
			pressed_keys[keys[i]].keyup = false;
		}
	}
	
	last_pressed = pressed_keys;
}