class Wallet {
    constructor() {
        Wallet.total++;
        this.money = [];
        this.text = [];
        this.present = 0;
    }
    deposit(money, comment) {
        if( money < 0 && -money > this.present ) {
            var e = new Error("한도 초과!!");
            throw e;
        }
        this.money.push(money);
        this.text.push(comment);
        this.present += money;
    }
    print() {
        for (var i = 0; i < this.money.length; i++) {
            if( this.money[i] < 0 ) {
                console.log(`출금 ${this.money[i]} ${this.text[i]}`);
            }else{
                console.log(`입금 ${this.money[i]} ${this.text[i]}`);
            }
        }
        console.log(this.present);
    }
    static getTotal(){
        console.log(Wallet.total);
    }
}
Wallet.total = 0;


var wal1 = new Wallet();
try {
    wal1.deposit(10000, "월급");
    wal1.deposit(1000, "용돈");
    wal1.deposit(-8000, "쇼핑");
    wal1.deposit(5000, "알바");
    wal1.deposit(-1000, "간식");
} catch (e) {
    console.log("@@##$$ 한도 초과 $$##@@");
}
console.log(`wal1 ${JSON.stringify(wal1)}`);
wal1.print();
Wallet.getTotal();


var wal2 = new Wallet();
try {
    wal2.deposit(10000, "월급");
    wal2.deposit(1000, "용돈");
    wal2.deposit(-8000, "쇼핑");
    wal2.deposit(5000, "알바");
    wal2.deposit(-1000, "간식");
} catch (e) {
    console.log("@@##$$ 한도 초과 $$##@@");
}
console.log(`wal2 ${JSON.stringify(wal2)}`);
wal2.print();
Wallet.getTotal();


var wal3 = new Wallet();
try {
    wal3.deposit(10000, "월급");
    wal3.deposit(-18000, "쇼핑"); //초과 출금요청
    wal3.deposit(1000, "용돈");
    wal3.deposit(-8000, "쇼핑");
    wal3.deposit(5000, "알바");
    wal3.deposit(-1000, "간식");
} catch (e) {
    console.log("@@##$$ 한도 초과 $$##@@");
}
console.log(`wal3 ${JSON.stringify(wal3)}`);
wal3.print();
Wallet.getTotal();



/*

 money, text 배열을 하나로 합쳐보세요.
 x, y 와 같은 이름은 좋지 않습니다.
 getTotal 외에 printAll을 만들어보세요
 static메소드안에서 this는 뭘 의미하는지 알아보세요


* */

