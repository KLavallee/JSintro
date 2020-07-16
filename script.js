console.log("Print all numbers between -10 and 19");
let num = -10;

while (num < 20){
    console.log(num);
    num++;
}

console.log("Print all even numbers between 10 and 40");
let x = 10;

while (x < 41){
    if(x % 2 === 0){
        console.log(x);
    }
x++;
}

console.log("Print all odd numbers between 300 and 333");
let j = 300;

while (j < 333){
    if(j % 2 != 0){
        console.log(j);
    }
    j++;
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
let y = 5;

while (y < 50){
    if(y % 5 === 0 && y % 3 === 0){
        console.log(y);
    }
    y++;
}