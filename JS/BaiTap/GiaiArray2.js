var formValues = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
]

console.log("Bài 1");
function getRequestBodyFromValues(formValues) {
    var output = {};
    formValues.forEach(function (item) {
        output[item.field] = item.value;
    });
    return output;
}

console.log(getRequestBodyFromValues(formValues));

var numbers = [1, -8, 3];
console.log("Bài 2");
function checkPositiveNumbers(numbers) {
    return numbers.every(function (item) {
        return item > 0;
    });
}

console.log(checkPositiveNumbers(numbers));

var courses = [
    { name: 'Javascript', vnd: 1000000 },
    { name: 'PHP', vnd: 990000 },
    { name: 'HTML, CSS', vnd: 0 }
]
console.log("Bài 3");
function hasFreeCourses(courses) {
    return courses.some(function (item) {
        return item.vnd === 0;
    });
}

console.log(hasFreeCourses(courses));

var monsters = [
    {
        name: 'Cá heo',
        attack: 150,
        speed: 100,
        hitpoint: 100,
    },
    {
        name: 'Khủng long',
        attack: 50,
        speed: 80,
        hitpoint: 180,
    },

]
console.log("Bài 4");
function findAMonsterByAttack(monsters) {
    var check =  monsters.find(function (item) {
        return item.attack === 150;
    });
    return check === undefined ? null : check;
}

console.log(findAMonsterByAttack(monsters));

var keyword = 'PHP';
var strings = ['Javascript', 'PHP', 'Học PHP'];
console.log("Bài 5");
function findStringsInArrayByKeyword(keyword, strings) {
    return strings.filter(function (item) {
        return item.indexOf(keyword) > -1;
    });
}

console.log(findStringsInArrayByKeyword(keyword, strings));

var array1 = [1, 2, 6, 8]
var array2 = [2, 9, 6]
console.log("Bài 6");
function findEqualValues(array1, array2) {
    var output = [];
    array1.forEach(function (item) {
        array2.map(function (item2) {
            if(item === item2)
                output.push(item);
        });
    });
    return output;
}

console.log(findEqualValues(array1, array2));