class Shape {
    draw() {
        console.log("Drawing a Shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a Circle");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}

const shapes = [new Circle(), new Shape()];
shapes.forEach(shape => shape.draw())