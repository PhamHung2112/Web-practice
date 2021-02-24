/*
var colorKey = 'color';
var myInfo = {
    //key: value,
    //muốn đặt thêm các dấu ở key ví dụ: full-name thì sẽ khai báo là: 'full-name'=....
    name: 'Phạm Hưng',
    age: 21,
    address: 'Hà Nội',
    [colorKey]: 'Black', //dùng biến
    getName: function() {
        return this.name;
    }
};

//function --> phương thức
//others --> thuộc tính

console.log(myInfo.getName());

//thêm 1 key mới sau khi tạo xong object
myInfo.email = 'abc@xyz.com';
//c2: myInfo.['my-email']='abc@xyz.com';

console.log(myInfo);

//cách lấy riêng ra 1 key
console.log(myInfo.age);
// c2: console.log(myInfo['age']);

//nếu 1 key k tồn tại sẽ trả về undefined
console.log(myInfo.java);

var myKey = 'address';
console.log(myInfo[myKey]);

//xóa 1 key trong object
delete myInfo.address;
console.log(myInfo);
*/

/*
//Object Constructor
//quy ước chung: viết hoa chữ cái đầu của tên object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    };
}

var author = new User('Phạm', 'Hưng', 'Avatar');
var user = new User('Phạm', 'Dương', 'Avatar');

author.title = 'Đẹp trai';
user.comment = 'Học giỏi';

console.log(author);
console.log(user);
console.log(User);
*/

/*
//Object prototype: dùng khi hàm tạo đã khởi tạo xong mà muốn thêm 1 thuộc tính hoặc 1 phương thức cho lớp cha
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    };
}

var user1 = new User('Phạm', 'Hưng', 'Avatar');
var user2 = new User('Phạm', 'Dương', 'Avatar');

// User.className = 'CNTT'; //--> kết quả: undefined

User.prototype.className = 'CNTT'; 
User.prototype.getClassName2 = function() {
    return this.className;
}

console.log(user1);
console.log(user2.getclassName2());

//nếu dùng cha để thêm 1 key và dùng con để kế thừa, sau khi dùng con gọi key đó sẽ ra kết quả là undefined --> dùng prototype
//dùng còn để thêm 1 key (dòng 56->61)
*/

//Date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1; //trả về giá trị tháng từ 0 đến 11 trong đó 0 tương ứng với tháng 1, 1 tương ứng tháng 2, ...
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

console.log(`${day} - ${month} - ${year}`);