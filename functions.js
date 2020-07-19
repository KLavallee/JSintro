function isEven(x) {
    if (x % 2 === 0) {
        return console.log("true");
    }
    return console.log("false");
}

function factorial(num) {
    if(num == 0) {
        return console.log(1);
    }
    var result = 1;
    for(var i = 2; i <= num; i++) {
        result *= i;
    }
    return console.log(result);
}

function kebabToSnake(str) {
    var newStr = str.replace(/-/g , "_")
    return console.log(newStr);
}

isEven(21);

factorial(10);

kebabToSnake("hello-world");
