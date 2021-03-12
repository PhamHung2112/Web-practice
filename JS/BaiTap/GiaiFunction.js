console.log("Bài 1");
function writeLog(prefix, message) {
    console.log(prefix + ': ' + message);
};

writeLog('prefix', 'message');

console.log("Bài 2");
function sumFunction(a,b) {
    if(typeof a === 'number' && typeof b === 'number')
        return a+b;
    else
        return false;
}

console.log(sumFunction('a','b'));

console.log("Bài 3");
function checkPositiveInteger(number) {
    if(number > 0 && number % 1 === 0)
        return true;
    else
        return false;
}

console.log(checkPositiveInteger(-5));

console.log("Bài 4");
function calculateTriangleArea(a, h) {
    if(a > 0 && h >0) 
        return 0.5*a*h;
}

console.log(calculateTriangleArea(5, 6));

console.log("Bài 5");
function stringInString(needle, haystack) {
    if(typeof haystack === 'string' && typeof haystack === 'string' && haystack.indexOf(needle) > -1)
        return true;
    else
        return false;
}
console.log(stringInString('5','5 + 3 = 8'));