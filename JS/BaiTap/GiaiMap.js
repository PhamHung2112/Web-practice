var arr = [0, 1, 2, NaN, 'hi', ''];
console.log('Bài 1');
function convertToBoolean(arr) {
    return arr.map(function(item) {
        return Boolean(item);
    })
}

console.log(convertToBoolean(arr));

var numbers = [1, 2, 3];
console.log('Bài 2');
function calArray(arr) {
    return arr.map(function(item) {
        return item*3;
    })
}

console.log(calArray(numbers));

var inputs = ['1', '6', '2', '8'];
console.log('Bài 3');
function convertToNumber(inputs) {
    return inputs.map(function(item) {
        return parseFloat(item);
    })
}

console.log(convertToNumber(inputs));

var number2 = [1, 2, 3];
console.log('Bài 4');
function convertToString(inputs) {
    return inputs.map(function(item) {
        return item.toString();
    })
}

console.log(convertToString(number2));