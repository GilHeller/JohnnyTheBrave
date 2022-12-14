export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setPoint(x, y){
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }

    isSamePoint(point){
    // 
        return this.x === point.getX() && this.y === point.getY();
    }
}
