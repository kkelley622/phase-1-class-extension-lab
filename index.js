// Your code here

class Polygon {

    constructor() {
        this.arrayOfSides = []
    }

    get countSides() {
        return this.arrayOfSides.length; 
    }

    get perimeter() {
        return this.arrayOfSides.reduce((partialSum, a) => partialSum + a, 0);
    }
}

class Triangle extends Polygon {

    get isValid() {

    }
}

class Square extends Polygon {

    get isValid() {
        if(this.arrayOfSides[0] === this.arrayOfSides[1] === this.arrayOfSides[2] === this.arrayOfSides[3]) {
            return true;
        }
    }
    get area() {
        if(isValid === true) {
            return this.arrayOfSides[0] * this.arrayOfSides[1];
        }
    }
}