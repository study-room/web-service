function printHello() {
    console.log('Hello');
}

function test( word) {
    console.log(word + " - test");
}

/*
module.exports = {
    print: printHello,
    test: test,
}*/
console.log('@@@@')
var a= 10;
module.exports = function(){
    ++a
    console.log(a);
}


// module.exports = test;
