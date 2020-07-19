function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first) {
            console.log("false");
        }
    }
    console.log("true");
}

function sumArray(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
}

function max(arr) {
    var max = arr[0];

    for(var i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log(max);
}

printReverse(["a" , "b" , "c"]);

isUniform([1, 1, 1, 1]);

sumArray([10,10,3,4]);

max([10,10,3,4])