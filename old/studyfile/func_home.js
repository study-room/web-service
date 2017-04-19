var objs = [
    {x:1, y:'hello'},
    {x:3, y:'friend'},
    {x:2, y:'my'},
];

function check(obj) {
    var bool = true;
    for( var i = 0 ; i < obj.length ; i ++ ) {
        if(obj[i].x > 5) {
            bool = false;
            return bool;
        }

    }
    return bool;
}
console.log(check(objs));


function obj(obj) {
    for( var i = 0 ; i < obj.length ; i ++ ) {
        if(obj[i].x == 2) {
            return obj[i];
        }
    }
    return null;
}
console.log(obj(objs));


function objIndex(obj) {
    for( var i = 0 ; i < obj.length ; i ++ ) {
        if(obj[i].x == 2) {
            return i
        }
    }
}
console.log(objIndex(objs));

var obj2 =
    objs
        .map((item)=>item)
.sort((a,b)=>{
    //return a.x < b.x ? -1 : a.x > b.x ? 1 : 0;
    return a.x - b.x
});
console.log(obj2);


/*
 // 숙제1
 var check = objs의 원소들의 모든 x값이 5보다 작으면 참 === true;

 // 숙제2
 var obj = objs의 원소들 중에 x값이 2인 원소 === objs[2];

 // 숙제3
 var objIndex = objs의 원소들 중에 x값이 2인 원소의 인덱스 === 2;

 // 고난도 숙제
 var objs2 = objs를 x값을 기준으로 정렬한 새로운 배열 // [objs[0], objs[2], objs[1]];

 */
