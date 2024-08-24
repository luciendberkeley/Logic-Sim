# Canvas Framework

This is a template for a lightweight HTML canvas framework designed to simplify drawing operations and handle input in web applications.

## Features

- **Start and Update Functions**:
	- Uses functions similar to the Unity Game Engine (https://unity.com/) to manage start and update:
	- `Start()`: Runs on startup.
	- `Update()`: Runs every animation frame.
- **Drawing Functions**: Includes intuitive drawing methods:
  - `DrawCircle(x, y, radius, color, fill=true, width=1)`
  - `DrawRect(x1, y1, x2, y2, color, fill=true)`
  - `DrawLine(x1, y1, x2, y2, color, width=1)`
- **Input Handling**: Functions for keyboard input:
  - `GetKey(keyCode)`: Check if a key is held down.
  - `GetKeyDown(keyCode)`: Detect when a key is pressed.
  - `GetKeyUp(keyCode)`: Detect when a key is released.
- **Time Management**: Access `deltaTime` to handle frame rate independent updates.
- **And More**: Updating this as I need so feel free email me for feature requests at lucienduchateau@students.berkeley.net. This is also open source so feel free to clone and work on it yourself. I'd love to see changes and features people make.

## Getting Started

### Simply use this as your template for your repository.
### You will start with;
- **index.html**: Your HTML file for adding extra scripts and other html items. You can add more scripts but make sure that the preload is before your scripts for everything to function properly.
- **script.js**: Your javascript file to run anything you would like. Comes with the default `Start()` and `Update()` functions.
- **styles.css**: Your CSS file for most styling of the webpage.
- **framework/**: The framework files where all the setup and functions lie. Working on documentation and comments in there for a higher quality framework but should be simple enough to understand. Broken up into different files for the separate types of functions. This may be revamped for a class based system later.
