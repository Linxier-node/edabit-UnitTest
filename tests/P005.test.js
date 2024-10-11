// test
const { Rectangle, Circle } = require('../Problems/P005');
describe('rectangle tests', () => {
  test('should return area of rectangle', () => {
    const rectangle = new Rectangle(5, 2);
    expect(rectangle.getArea()).toBe(10);
  });

  test('should return perimeter of rectangle', () => {
    const rectangle = new Rectangle(5, 2);
    expect(rectangle.getPerimeter()).toBe(14);
  });
});

describe('circle tests', () => {
  test('should return area of circle', () => {
    const circle = new Circle(5);
    expect(circle.getArea()).toBe(Math.PI * 25);
  });

  test('should return perimeter of circle', () => {
    const circle = new Circle(5);
    expect(circle.getPerimeter()).toBe(2 * Math.PI * 5);
  });

  test('should return diameter of circle', () => {
    const circle = new Circle(5);
    expect(circle.getDiameter()).toBe(10);
  });
});
