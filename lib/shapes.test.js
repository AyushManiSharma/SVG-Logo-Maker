const shapes = require("./shapes.js"); // The path may vary based on your project's directory structure

// Unit testing -> testing for a triangle with a blue background to render
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = shapes.generateShapes("triangle", 'fill="blue"');
    expect(shape.trim()).toEqual(
      '<polygon points="0 200, 100 0, 200 200" width="200" height="200" fill="blue" />'
    );
  });
});

// Unit testing -> testing for a square with a purple background to render
describe("Square test", () => {
  test("test for a square with a purple background", () => {
    const shape = shapes.generateShapes("square", 'fill="purple"');
    expect(shape.trim()).toEqual(
      '<rect x="0" y="0" width="200" height="200" fill="purple" />'
    );
  });
});

// Unit testing -> testing for a circle with a #ca00ca background to render
describe("Circle test", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = shapes.generateShapes("circle", 'fill="#ca00ca"');
    expect(shape.trim()).toEqual(
      '<circle cx="100" cy="100" r="100" fill="#ca00ca" />'
    );
  });
});