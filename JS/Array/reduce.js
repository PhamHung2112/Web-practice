//reduce()
var inputs = [{}, 1, [], 2, 'hi', 0, 6, NaN];
function sumNumbers(inputs) {
    var total = inputs.reduce(function(a,b) {
        return typeof b === 'number' && isNaN(b) === false ? a+b : a;
    }, 0);

    console.log(total);
}

sumNumbers(inputs);

// for(var item of inputs) {
//     console.log(isNaN(item));
// }

console.log(parseFloat([]));

var myArray = [
    {
        id: 1,
        name: 'PHP',
        coin: 0
    },
    {
        id: 2,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 3,
        name: 'Java',
        coin: 0
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 300
    },
    {
        id: 5,
        name: 'Python',
        coin: 200
    }
];

var totalCoin = myArray.reduce(function (total, course) {
    
}, 0)//--> dòng 330
/*
(0): reduce sẽ nhận 2 tham số: giá trị khởi tạo, giá trị là phần tử của mảng
(1): nếu khởi gán giá trị cho total thì total sẽ bằng giá trị đó và biến course sẽ là phần tử đầu tiên
(2.1): nếu không có khởi gán giá trị = 0 hay bằng 1 giá trị nào đó 
thì tham số total sẽ lấy giá trị là phần tử đầu tiên của mảng 
còn course sẽ là phần tử thứ 2
(2.2): muốn nhận được kiểu dữ liệu nào thì khởi gán giá trị là kiểu dữ liệu đó
*/

//Example
//Bài 1: "Làm phẳng" mảng từ Depth Array
var depthArray = [1, 2, [3,4], 5, 6, [7,8,9]];
var flatArray = depthArray.reduce(function(arr, value) {
    return arr.concat(value);
    newArr.reduce(function(total, item) {
        return {
            'Tổng các số chẵn là': total += item
        }
    }, {})
}, []);

console.log(flatArray);

//Bài 2: Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    },
];
