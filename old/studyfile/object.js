
phone = {
    name: 'iphone',
    price: 1000000,
    discount: 50,
    '한글': '아이폰',
    arr: [1,2,3,4,5],
    func: function(a,b,c){
        console.log(a,b,c)
    }
}
phone.arr[3] = 40;
phone.arr[4] = {A: 1, B: 2};

console.log(phone.name);
console.log(phone.price);
console.log(phone.discount);
console.log(phone['한글']);
console.log(phone.arr);
console.log(phone);

phone.func(4,6,8);


