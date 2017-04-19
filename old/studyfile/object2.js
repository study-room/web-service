var arr = [
    {x: 1, y: 'hello1'},
    {x: 2, y: 'hello2'},
    {x: 3, y: 'hello3'},
    {x: 5, y: 'hello5'},
    {x: 4, y: 'hello4'}
]
/*
var bool1 = arr.some(obj => obj.x == 2);
var bool2 = arr.every(obj => obj.x ==2);
var obj = arr.find(obj => obj.x ==2);
var obj = arr.findIndex(obj => obj.x == 2);
var sortedArr = arr.sort((a, b) => {
        if(a.x > b.x) return 1;
        if(a.x < b.x) return -1;
        return 0;
})
*/
// console.log(arr.slice(0, 3));;
// console.log(arr.splice(0, 3));;
// ar1 =[1,2,3];
// ar2 =[1,2,3];
// console.log(ar1.concat(ar2));



// var tel =["010","29564","1129"];
// var text = tel.join("-")



var a1 = [ [1,2,3],[6,5,4],[7,8,9] ];
var a2 = a1.reduce((sum, item) => sum.concat(item), []);
var t1 = a2.sort();
var t2 = a2.join('-');
var t3 = a2.splice('-').join('#');

console.log(a1, a2, t1, t2, t3);



// console.log(text);

// console.log(`sortedArr = ${JSON.stringify(sortedArr)}`)