function printColor(color) {
    console.log("******************");
    console.log(color);
}

let colors = ["red" , "orange" , "yellow"];

colors[3] = "green";

let array = [49 , true , "Harry"];

colors.push("blue");

console.log(colors[4]);

let col = colors.pop(); // RETURNS the last item in the array, removes

console.log(col);

colors.unshift("purple");

let col2 = colors.shift();

console.log(col2);

colors.indexOf("yellow");
colors.indexOf("violet");

let x = colors.slice(0, 2);

console.log(x);

// Nested arrays
var friendGroups = [
    ["Harry" , "Ron", "Hermoine"] ,
    ["Malfoy" , "Crabbe" , "Goyle"] ,
    ["Mooney" , "Wormtail" , "Prongs"]
];

// console.log(friendGroups[0][1]);

// for (var i = 0; i < colors.length; i++) {
//    console.log(colors[i]);
// }

// FOREACH INSTEAD OF ITERATION USING A FOR LOOP

// colors.forEach(function(friends){
//     console.log(friends);
// });

// friendGroups.forEach(function(friends) {
//     console.log(friends);
// })

for(var i = 0; i < friendGroups.length; i++) {
    for(var j = 0; j < friendGroups.length; j++) {
        console.log(friendGroups[i][j]);
    }
}

// colors.forEach(printColor);

// METHODS ON MDN IS IMPORTANT

// Can hold anytype of data
// array.length