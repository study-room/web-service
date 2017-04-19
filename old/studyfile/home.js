
class Record {
    constructor(money, comment) {
        this.money = money;
        this.comment = comment;
        this.time = new Date();
        this.type = (money < 0 ? '[출금]' : '[입금]');
    }

    toString(){
        var str = '';
        str += `${this.type}\t${this.money}\t${this.comment}\t${this.time.getFullYear()}-${this.time.getMonth()}-${this.time.getDay()}\n`
        return str;
    }

}

class Wallet {
    constructor(name) {
        Wallet.total++;
        this.bankbook = [];
        this.present = 0;
        this.str ='';
        this.name = name;
        Wallet.all.push(this);
    }
    deposit(money, comment) {
        if( this.present + money < 0 ) {
            var e = new Error("한도 초과!!");
            throw e;
        }
        var bill = new Record(money, comment);
        this.bankbook.push(bill);
        this.present += money;
    }

    toString() {
        var str = '';
        str +=`${this.name}님의 계좌정보\n`;
        str +=`################################\n`;
        for (var i = 0; i < this.bankbook.length; i++) {
            var ibook = this.bankbook[i];
            str += ibook.toString();
        }
        str +=`################################\n`;
        str +=`@ 잔액 : ${this.present} @\n`;
        return str;
    }
    static getTotal(){
        console.log(Wallet.total);
    }
    static printAll() {
        var str = "";
        for (var i = 0; i < Wallet.all.length; i++) {
            str += `${Wallet.all[i].toString()}\n`;
        }
        return str;
    }
}
Wallet.total = 0;
Wallet.all = [];
console.log('Start')

var wal1 = new Wallet('길동');
try {
    wal1.deposit(10000, "월급 ");
    wal1.deposit(1000, "용돈");
    wal1.deposit(-8000, "쇼핑");
    wal1.deposit(5000, "알바");
    wal1.deposit(-1000, "간식");
    wal1.deposit(-3000, "야식");
} catch (e) {
    console.log("!!!! 한도 초과 !!!!####");
}


var wal2 = new Wallet('춘향');
try {
    wal2.deposit(20000, "월급");
    wal2.deposit(1000, "용돈");
    wal2.deposit(-8000, "쇼핑");
    wal2.deposit(5000, "알바");
    wal2.deposit(-1000, "간식");
    wal2.deposit(-10000, "야식");
} catch (e) {
    console.log("!!!! 한도 초과 !!!!####");
}
console.log(Wallet.printAll());



console.log('안녕\n' + wal1);