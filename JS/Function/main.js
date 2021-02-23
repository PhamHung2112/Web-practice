/*
1. Tham số
- Định nghĩa ?
- Kiểu dữ liệu ?
- Tính private ?
- 1 tham số
- Nhiều tham số

2. Truyền tham số
- 1 tham số
- Nhiều tham số

3. Arguments?
- Đối tượng Arguments ?
- For of?
*/

/*
function writeLog(message) {
    console.log(message);
}

writeLog('Test');
*/

/*
    tự định nghĩa biến là tham số, gọi biến ra là đối số
    ví dụ: message là tham số; 'Text' là đối số 
*/

/*
function writeLog(message, message2) {
    console.log(message);
    console.log(message2); //giá trị trả về là undefined 
}

writeLog('Test');
*/

/*
function writeLog() {
    console.log(arguments);
}
//arguments có kiểu dữ liệu là array
writeLog('Test','Test2');
*/

/*
function writeLog() {
    var myString = '';
    for(var param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}

writeLog('Test','Test2','Test3');
*/

//Return trong js
/*
var isConfirm = confirm('Phạm Hưng');

console.log(isConfirm);
*/

/*
function cong(a,b) {
    return a+b;
}

var result = cong(2,8);

console.log(result);
//Hàm không trả về sẽ trả về giá trị undefined
*/

//Khi định nghĩa 2 function cùng tên thì khi gọi function sẽ thực thi function sau cùng và in ra kết quả của function đó
function stringInString(needle, haystack) {
    if(typeof needle !== 'string' || typeof haystack !== 'string')
        return false;
    else if(haystack.indexOf(needle)!=-1)
        return true;
    else
        return false;
}

/* 
    1. Declaration function: có thể gọi trước khi được định nghĩa
    function abc() {

    }
    //Bắt buộc phải đặt tên function và đặt trước ()
    2. Expression function

    3. Arrow function
*/

//2. Expression function
/*
var showMessage = function() { //không nhất thiết phải có tên function trước '()'

}

setTimeout(function() {

});

var myObject = {
    myFunction: function() {

    }
}
*/