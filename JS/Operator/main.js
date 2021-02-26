//if-else
//switch-case

/*
//Toán tử 3 ngôi
var course = {
    name: 'Javascript',
    coin: 250
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);

var a = 1;
var b = 2;
var c = a>0 ? a:b ;
console.log(c);
*/

//Vòng lặp
/*
//for in : 
var myObject = {
    name: 'Phạm Hưng',
    age: 21,
    FavColor: 'Black'
}

for (var key in myObject) {
    console.log(key); //in ra index
    console.log(myObject[key]);
}

var myArray = [
    'Javascript',
    'PHP',
    'NodeJS'
]

for (var key in myArray) {
    console.log(key); //in ra index
    console.log(myArray[key]);
}

var myString = 'Javascript';

for(var key in myString) {
    console.log(key);
    console.log(myString[key]);
}
*/

/*
//for of
var myArray = [
    'Javascript',
    'PHP',
    'NodeJS'
]

for (var value of myArray) {
    console.log(value);
}

var myString = 'Javascript';

for(var value of myString) {
    console.log(value);
}

var myObject = {
    name: 'Phạm Hưng',
    age: 21,
    FavColor: 'Black'
}

//Cách 1:
console.log(Object.keys(myObject));

for (var value of Object.keys(myObject)) {
    console.log(myObject[value]);
}

//Cách 2:
console.log(Object.values(myObject));

for (var value of Object.values(myObject)) {
    console.log(value);
}
*/

/*
var i=0;
var isSuccess = false;
// do {
//     i++;
//     console.log('Nạp thẻ lần ' + i);
//     if(false) {
//         isSuccess = true;
//     }
// } while(!isSuccess && i <=3);

while(!isSuccess && i <=3) {
    i++;
    console.log('Nạp thẻ lần ' + i);
    if(true) {
        isSuccess = true;
    }
}
*/

// var myArray = [
//     [1,2], 
//     [3,4],
//     [5,6]
// ];

// for(var i=0; i<myArray.length; i++) {
//     for(var j=0; j<myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }
// }    