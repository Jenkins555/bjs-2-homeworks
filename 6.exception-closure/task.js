function parseCount(value) {
    Number.parseInt();
    if (isNaN) throw "Невалидное значение";
    return value;
}

function validateCount(value) {
    try {
        parseCount();
        return value;
    } catch (e) {
        throw "Error";
    }
}




class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        if ((this.side1 + this.ide2) < this.side3 ||
            (this.side2 + this.side3) < this.side1 ||
            (this.side3 + this.side1) < this.side2)
            throw new Error("Треугольник с такими сторонами не существует")
    }
    getPerimeter() {
        let perimetr = this.side1 + this.side2 + this.side3;
        return perimetr;
    }
    getArea() {
        let p = perimetr / 2;
        s = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))
        return s.toFixed(3)
    }
}

function getTriangle(side1, side2, side3) {
    let triangle = Triangle();
    try {
        triangle = {
            side1: side1,
            side2: side2,
            side3: side3
        }
        return triangle;
    }
    catch (e) {
        let obj = {
            getArea();,
            getPerimeter();
        }
        throw new Error("Ошибка! Треугольник не существует")
             
    }

}