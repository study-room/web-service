//블럭이 돌기 전에 ; 조건문 ; 돌고난 후 ;
/*

i=0;

for (; i < 10 ; i++) {
    if( (i % 2 ) == 1){
        for (o = 0 ; o < 10 ; o++ ) {
            if(o > 0){
                //console.log( i + 'x' + o + "=" + (i*o));

            }
        }
    }
}
i= 1;
while (i < 10 ){
    if( i == 2 || i == 5 || i == 8){

        var j = 1;
        while(j>10){
            //console.log(`${i} x ${j} = ${i*j}`);
            j++;
        }
    }
    i++;
}



function gugu(x,y){
    for(var i = 1; i < 10 ; i++){
        if(i > x && i < y){
            for(var j=1; j<10; j++){
                console.log(`${i} x ${j} = ${i*j}`)
            }
        }
    }
}

gugu(6,3);
*/

/*
x라는 함수를
y번 반복하는 함수
*/


/*

function repeatFunc(x,y){
    for (i = 0; i < y; i++){
        x();
    }
}

function hello(){
    console.log('hello');
}
*/

//repeatFunc(hello, 5);


function asd(){
        setTimeout(function(){
            console.log('Hello');
            asd();
        },1000);
}
// asd();


function fac(x){
    if(x == 1){ return 1;}
    return x * fac(x-1);
}
 // console.log(fac(5));;//120

function asd(n){
    var a = 1;
    for(var i = 0; i > 0; i--){
         a = a * i;
    }

}

// console.log(asd(5));

/*
function zxc(x, y){
    if(x == 0 || y ==0){
        var e = new Error("에러 발생");
        throw e;
    }
    return x / y
}

try{
    console.log(zxc(10, 5));
    console.log(zxc(10, 4));
    console.log(zxc(10, 0));
    console.log(zxc(10, 2));
    console.log(zxc(10, 1));
}catch(e){
    console.log("에러를 잡았다!!!");
}

*/

money = [];
text =[];
present = 0;


function deposit( x , y ){
    if(x < 0 && -x > present ){
        var e = new Error("에러 발생");
        throw e;
    }
    money.push(x);
    text.push(y);
    present += x;

}
function print(){
    for(var i = 0 ; i < money.length ; i++){
        if(money[i] < 0){
            console.log(`출금 ${money[i]} ${text[i]}`);
        }else{
            console.log(`입금 ${money[i]} ${text[i]}`);
        }
    }
    console.log(present);
}
try{
    deposit(1000, "월급");
    deposit(-2000, "월급");
    deposit(1000, "월급");
    deposit(1000, "월급");
    deposit(-1000, "월급");
    print();
}catch(e){
    console.log(`에러 발생`);
}
// print();

