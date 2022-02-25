function parseCount(value) {
    const error = new Error("Невалидное значение")
    Number.parseInt(value);
    if (isNaN(value)) {
        throw error;
    } else {
        let js = JSON.stringify(value);
        return js;

    }

}

function validateCount(value) {
    try {
        parseCount(value);
    } catch (err) {
        return err;
    }
}




class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        const divideError = new Error("Треугольник с такими сторонами не существует");
        if ((this.side1 + this.ide2) < this.side3 ||
            (this.side2 + this.side3) < this.side1 ||
            (this.side3 + this.side1) < this.side2)
            throw new divideError;
    }
    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
    getArea() {
        let perimetr = getPerimeter();
        let p = perimetr / 2;
        let s = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
        return +s.toFixed(3);
    }
}

function getTriangle(side1, side2, side3) {

    try {
        return new Triangle(side1, side2, side3)
    }
    catch (err) {

        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }

        }

    }

}