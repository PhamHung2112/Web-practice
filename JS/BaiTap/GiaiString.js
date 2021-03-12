console.log("Bài 1");
function countString(commentText) {
    textLength = commentText.length;
    console.log(textLength);
}
countString("hungdeptrai");

console.log("Bài 2");
function checkString(statusText) {
    if(typeof statusText === 'string' && statusText.length > 1) 
        var result = true;
    else
        var result = false;
    return result; 
}

console.log(checkString("23"));

console.log("Bài 3");
function checkWords(title, description) {
    if(title.includes("Javascript") == true && description.includes("Javascript"))
        return true;
    else
        return false;
}

console.log(checkWords("Javascript1","Javascript2"))

console.log("Bài 4");
function cutWords(title) {
    language = title.slice(4,15);
    rest = title.slice(15);
    general = language + rest
    return general;
}

console.log(cutWords('Học Javascript tại F8'));

console.log("Bài 5");
function replaceWords(content) {
    return content.replace(/JS/g, "Javascript");
}

console.log(replaceWords('JS học JS học JS tiếp học JS nữa'));

console.log("Bài 6");
function changeWords(a,b) {
    return a.toLowerCase() + b.toUpperCase();
}

console.log(changeWords("HƯNG ĐẸP TRAI ", "haha"));

console.log("Bài 7");
function removeSpace(statusText) {
    return statusText.trim();
}

console.log(removeSpace('                    Javascript                '));