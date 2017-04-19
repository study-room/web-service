class Drawable {
    getSize() {
        return 0; //숫자를 반환한다.
    }
}

class Circle extends Drawable { //Drawable을 상속받는다.
    constructor(radius) {
        this.radius = radius;
    }

    getSize() {
        return (this.radius ** 2) * Math.PI;
    }
}

class Rect extends Drawable {
    constructor(height, width1, width2) {
        this.height = height;
        this.width1 = width1;
        this.width2 = width2;
    }

    getSize() {
        return ((this.width1+ this.width2) / 2) * this.height;
    }
}

class Rectangle extends Rect { //Rect을 상속받는다.
    constructor(height, width) {
        super(height, width, width);
    }
}l

class Square extends Rectangle { //Rectangle을 상속받는다.
    constructor(height) {
        super(height, height);
    }
}