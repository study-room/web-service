function swap (x, y) {
    return (a = y,b = x);
}

a = 10;
b = 20;
swap(a, b);
// console.log(a, b)



function copyArry(arr){
    var arr2 = [];
    var arr3 = [];
    for(var i=0; i < arr.length; i++){
        arr2.push(arr[i]);
    }
    arr.map(function(a){
        arr3.push(a);
    });

    return arr3;
}
// arr1 = [1,2,3,4,5];
// arr2 = copyArry(arr1);
// arr2.push(6);
// console.log(arr1.length != arr2.length);
// console.log(arr2);


class Human {
    constructor(name, gender, height, age) {
        Human.total++;

        this.name = name;
        this.gender = gender;
        this.height = height ? height : "비밀";
        this.age = age || "비밀";
        this.oldman = age > 80;
    }
    speak() { // method
        console.log(`
            안녕하세요 제 이름은 ${this.name} 입니다.
            저는 ${this.gender} 입니다.
            `)
    }
    rename(name) { // method
        this.name = name;
    }
    static getTotal(){
        console.log(Human.total);
    }
}
Human.total = 0;

people={};
var juni = new Human('juni', 'man', 170, 34);
var juni2 = new Human('juni2', 'woman');
var yongjun = new Human('yongjun', 'man', null , 90);


Human.getTotal();

// people[0] = juni;
// people[1] = juni2;
// console.log(people);
// juni.speak();
// console.log(yongjun);
// yongjun.rename('조용준');
// yongjun.speak();


class Animal{
    constructor(name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;
    }
    profile(){
        console.log(`
        이 동물의 종류는 ${this.type} 입니다.
        이름은 ${this.name} 이고,
        나이는 올 해 ${this.age}살 입니다.
        `)
    }
}

var cat = new Animal('샤샤', '고양이', 2);
cat.profile();
console.log(cat);

