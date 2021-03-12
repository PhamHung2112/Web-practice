console.log("Bài 1");
var number =5;
console.log(typeof number.toString());

console.log("Bài 2");
var Pi= 3.141592653589793;
console.log(Pi.toFixed(2));

console.log("Bài 3");
function check(number) {
    if(number > 0 && number%1==0) 
        return true;
    else
        return false;
}
console.log(check(5.5));
console.log(5.5%1)