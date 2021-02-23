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