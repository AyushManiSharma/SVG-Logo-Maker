// Import required modules
const fs = require('fs');
const readlineSync = require('readline-sync');
const text = require('./lib/text'); 
const shapes = require('./lib/shapes'); 
const basicTemplate = require('./lib/svgGenerator'); 

// Function to generate SVG shapes
function generateShapes(shape, shapeColor) {
  return shapes.generateShapes(shape, shapeColor);
}

// Get user inputs for initials, character color, shape, and shape color
const initials = readlineSync.question('What are the three characters you want to use? ');
const charColor = readlineSync.question('What do you want the character color to be?');
const shape = readlineSync.question('What is the shape you want to use? (Triangle, Circle, Square) ');
const shapeColor = readlineSync.question('What do you want the shape color to be?');

// Function to handle user input for shape and shape color
function shapeUserInput(shapeInput, shapeColorInput) {
  return shapes.generateShapes(shapeInput, shapeColorInput);
}

const textEl = text.getTextEl(initials);
const colorTextEl = textEl.replace('white', charColor);
const svgLogo = basicTemplate.writeBaseTemplate(shapeUserInput(shape, shapeColor), colorTextEl);

console.log(svgLogo);

fs.writeFile('logo.svg', svgLogo, (err) => {
  if (err) throw err;
  console.log('Generated logo.svg');
});

function shapeUserInput(shapeInput, shapeColorInput) {
  return shapeInput.toLowerCase() === 'circle'
    ? generateShapes(shapeInput, `fill="${shapeColorInput}"`)
    : generateShapes(shapeInput, shapeColorInput);
}