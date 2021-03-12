var numbers = [1, 2, 0, 6];
console.log("Bài 1");
function sumArray(numbers) {
    return numbers.reduce(function (total, value) {
        return total += value;
    }, 0);
}

console.log(sumArray(numbers));

var inputs = [1, 2, function() {}, NaN];
console.log("Bài 2");
function sumArray2(inputs) {
    return inputs.reduce(function (total, value) {
        return parseFloat(value) !== NaN && isNaN(value) === false ? total += value : total;
    }, 0);
}

console.log(sumArray2(inputs));

var courses = [
    { name: 'Javascript', coin: 1000 },
    { name: 'PHP', coin: 1200 },
    { name: 'Dart', coin: 1400 }
]

console.log("Bài 3");
function totalCoin(courses) {
    return courses.reduce(function (total, value) {
        return total += value.coin;
    }, 0);
}

console.log(totalCoin(courses));