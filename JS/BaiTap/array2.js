/* 
Bài 1:
Cho trước hàm getRequestBodyFromValues và tham số formValues, 
các test case sẽ gọi hàm này và truyền đối số có định dạng tương tự như sau:

[
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
    // ...
]
Như các bạn thấy, formValues là một mảng có thể chứa nhiều objects. Mỗi object chứa 2 keys là field và value.

Yêu cầu
Từ array formValues đã cho, hãy trả về một object có các keys tương ứng với các fields của các objects nằm trong array formValues.

Ví dụ 1:
Input:

[
    { field: 'name', value: 'Sơn Đặng' },
]
Output:

{ name: 'Sơn Đặng' }
Ví dụ 2:
Input:

[
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
]
Output:

{ name: 'Sơn Đặng', age: 18 }
Ví dụ 3:
Input:

[
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
]
Output:

{ name: 'Sơn Đặng', age: 18, address: 'Hà Nội' }
*/

/* 
Bài 2: Cho trước hàm checkPositiveNumbers có tham số numbers sẽ nhận một mảng gồm các phần tử là những số bất kì. Hàm này được tạo ra với mục đích kiểm tra toàn bộ các chữ số trong mảng numbers có phải là số dương hay không.

Yêu cầu
1.Nếu toàn bộ phần tử trong mảng numbers là số dương hàm sẽ trả về true
2.Nếu một trong các phần tử của mảng numbers không phải số dương hàm sẽ trả về false
Ví dụ:

1.Input: [1, 2, 3] - Output: true
2.Input: [1, -8, 3] - Output: false
3.Input: [-2, -6, 3] - Output: false
*/

/* 
Bài 3:
Cho hàm hasFreeCourses để kiểm tra một danh sách khóa học có khóa học nào miễn phí hay không.
Cho biến courses là tham số của hàm trên, biến này là một array chứa nhiều object đại diện cho khóa học có định dạng như sau:
[
    { name: 'Javascript', vnd: 1000000 },
    { name: 'PHP', vnd: 990000 },
    { name: 'HTML, CSS', vnd: 0 }
    // ...
]
Yêu cầu
1.Hàm hasFreeCourses sẽ trả về true nếu đối số truyền vào có chứa khóa học miễn phí
2.Hàm hasFreeCourses sẽ trả về false nếu đối số truyền vào không chứa khóa học miễn phí 
*/

/* 
Bài 4: Cho trước biến monsters là một danh sách các con thú trong game có định dạng như sau:

[
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100,
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180,
    },
    // ...
]
Yêu cầu
Tìm thú có chỉ số attack bằng 150 và trả về thú đó trong hàm findAMonsterByAttack đã cho trước (Trả về thú đầu tiên tìm được)
Trường hợp trong danh sách monsters không có thú phù hợp thì hàm findAMonsterByAttack trả về null
Ví dụ 1:

Input:
[
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180
    }
]
Output:
{
    name: 'Khủng long',
    attack: 150,
    speed: 80,
    hitpoint: 180
}
Ví dụ 2:

Input:
[
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100
    }
]
Output:
null
*/

/* 
Bài 5: Cho trước hàm findStringsInArrayByKeyword và tham số thứ nhất có tên keyword sẽ là một chuỗi bất kỳ.

Tham số thứ hai có tên strings sẽ là một array chứa các chuỗi bất kì, array này có định dạng như sau:

['hi', 'abc', 'chuỗi', '123']
Yêu cầu
Trong hàm cho trước, hãy trả về một array mới gồm các phần tử trong array strings có chứa giá trị của biến keyword. Trường hợp không có phần tử phù hợp trả về mảng rỗng.
Ví dụ:
1.Input: PHP, ['Javascript', 'PHP'] - Output: ['PHP']
2.Input: PHP, ['Javascript', 'PHP', 'Học PHP'] - Output: ['PHP', 'Học PHP']
3.Input: Gấu, ['Javascript', 'PHP'] - Output: []
*/

/* 
Bài 6:
Tại bài tập này chúng ta sẽ cùng nhau tạo hàm findEqualValues để tìm ra các giá trị bằng nhau giữa hai array.
Yêu cầu
Tạo hàm findEqualValues có hai tham số là array1 và array2 (Hai tham số này sẽ được test case tại F8 truyền đối số là các array chứa nhiều các giá trị số hoặc chuỗi bất kì).
Trường hợp array1 và array2 có các giá trị bằng nhau thì hàm findEqualValues sẽ trả về mảng mới chứa các giá trị đó (mỗi giá trị là một phần tử trong array mới)
Trường hợp không có giá trị bằng nhau giữa hai tham số thì hàm trả về array rỗng []
Ví dụ:
1.Input: [1, 2, 6, 8], [2, 9, 6] - Output: [2, 6]
2.Input: [1, 2, 3], [2, 9, 6] - Output: [2]
3.Input: [1, 2, 3], [4, 5, 6, 7, 8] - Output: []
4.Input: ['Gấu'], ['Lan', 'Hằng', 'Linh', 'Trang', 'Con gái'] - Output: []
*/