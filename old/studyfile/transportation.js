class Transportation {
    //추상클래스
    //
    constructor( name, capacity ){
        this.name = name;
        this.capacity = capacity;

    }

    getPrice(){
        return 0;
    }
}

class Airplane extends Transportation {
    constructor(id, seatClass){
        super(id, 100);
        this.id = id;
        this.seatClass = seatClass;
        this.capacity = 100;

    }

    getPrice(){
        return Airplane.prices[this.seatClass];
    }
}
Airplane.prices = {
    E: 100,
    B: 200,
    F: 300
}



class Ship extends Transportation {
    constructor( id, capacity, price, isCruise ){
        super(name, capacity);
        this.name = id;
        this.price = price;
        this.isCruise = isCruise;
    }
    getPrice(){
        return .prices[this.seatClass];
    }

}



