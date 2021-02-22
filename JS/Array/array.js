var language = [
    'Javascript',
    'C#',
    'Java',
    'Reactjs'
];

// console.log(language);

//1. ToString: chuyển mảng về chuỗi
console.log("1. toString");
// console.log(language.toString());
// console.log(typeof language.toString());

//2. join: chuyển mảng về chuỗi và thay đổi dấu ',' giữa các phần tử trong chuỗi thành 1 dấu khác
console.log("2. join");
// console.log(language.join(' - '));

//3. pop: xóa element cuối mảng và trả về phần tử đã xóa và khi xóa 1 mảng rỗng sẽ trả về giá trị undefined
console.log("3. pop");
// console.log(language.pop());
// console.log(language.pop());
// console.log(language.pop());
// console.log(language.pop());
// console.log(language.pop());
// console.log(language);

// 4. push: thêm một hoặc nhiều phần tử vào cuối mảng và in ra số phần tử của mảng
console.log("4. push");
// console.log(language.push('C++'));
// console.log(language);

//5. shift: xóa phần tử ở đầu mảng và in ra phần tử đã xóa và khi xóa 1 mảng rỗng sẽ trả về giá trị undefined
console.log("5. shift");
// console.log(language.shift());
// console.log(language.shift());
// console.log(language.shift());
// console.log(language.shift());
// console.log(language.shift());
// console.log(language);

//6. unshift: thêm một hoặc nhiều phần tử vào đầu mảng và in ra độ dài mới của mảng
console.log("6. unshift")
// console.log(language.unshift('C++'));
// console.log(language);

//7. splice: xóa cắt chèn phần tử mới vào mảng
console.log("7. splice");
//Xóa: language.splice(index, số lượng phần tử muốn xóa)
// language.splice(1, 1);
// console.log(language.splice(-4));
//Chèn: language.splice(index, 0 , những phần tử muốn truyền vào);
// language.splice(1, 0, 'Angular'); //thêm vào trước element có index=1(C#)
// language.splice(1, 2, 'Angular'); //xóa element có index=a sau đó thay thế 'Angular' vào index=a
// console.log(language);

//8. concat: nối mảng 
console.log("8. concat");
var language2 = [
    'Apple',
    'Chicken',
    'Beef'
]
// console.log(language.concat(language2)); //2 mảng hợp nhất vào 1 mảng có tên là language
// console.log(language2.concat(language)); //đảo thứ tự trên

//9. slice: cắt phần tử và in ra phần tử bị cắt
console.log("9. slice");
// console.log(language.slice(vị trí bắt đầu: index, vị trí kết thúc))
// console.log(language2.slice(1,2));
// var language2 = [
//     'Apple',
//     //1 'Chicken',
//     //2 'Beef'
// ]

// console.log(language2.slice(0)); //copy mảng
// console.log(language2.slice(1)); //xóa từ phần tử 1 đến cuối mảng

// console.log(language2.slice(-2,0));
// var language2 = [
//     'Apple',
//     //-2 'Chicken',
//     //-1 'Beef' //0
// ]