arr =[1,2,3,4,5];
arr2 =[];

/*
for( var i = 0 ; i < arr.length ; i++ ) {
    arr[i] = arr[i] * arr[i];
}
*/

/*
 function f(number,i){
 console.log(number * number);
 }
 arr.forEach(f);
 */

/*
arr.forEach(function(number, i){
    arr[i] = (number * number);
});
*/

/*
for(var i=0; i< arr.length ; i++){
    if ((arr[i]%2) == 0 ){
        arr2.push(arr[i])
    }
}
*/

/*
arr.filter(function(number){
    return number % 2 == 0;
}).forEach(function(num, i, arr_){
    console.log(num, i, arr_);
});
*/

/*
arr.filter(function(number){
    return number % 2 == 0;
}).forEach(console.log); //콘솔로그 자체가 함수다!
*/

// console.log(arr2);
/*
(...) => {
    return ...;
}*/

var sum = (a,b) =>{
    return a+b;
}

sum(3,4);

var sum2 = (a,b) => a+b;

// console.log(sum2(1, 3));;


// arr.filter((number) => number % 2 == 0).forEach(console.log);


arr2 = arr.map(number => number*number);
arr3 = arr.map((number) => {
    return number*number
});

// var total = arr.reduce((sum, number) => sum + number, 0);

// arr.reduce((result, item) => newResult, initial);
// console.log(total);

var objs = [
    {x:1, y:'Hello'},
    {x:2, y:'my'},
    {x:3, y:'friend'},
];

// console.log(objs2.reduce((xxx, item) => xxx * item, 1));
/*
objs2= [];
sum = 1;
for( var i= 0; i<objs.length; i++){
    var obj = objs[i];
    sum = sum *(obj.x * obj.y.length);
}
// console.log(sum);


var objnew = objs.map(data => (data.x * data.y.length)).reduce((sum, item) => sum * item,1);

var objreduce = objs.reduce((sum,item) => sum * item.x * item.y.length,1);

 console.log(objreduce);
*/

//some, every

var check = false;
for(var i= 0; i< objs.length ; i++){
    if(objs[i].y == 'my'){
        check = true;
        break;
    }
}
// console.log(check);

var some = objs.some((item) => item.y == 'my');
// console.log(some);



//



