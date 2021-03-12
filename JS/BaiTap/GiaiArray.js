console.log('Bài 1: ');
function checkArray(couldBeAnything) {
    if(Array.isArray(couldBeAnything))
        return true;
    else 
        return false;
}
console.log('Bài 2: ');
function assignArray(input) {
    result = input[input.length - 1];
    console.log(result);
}

assignArray(['hung', 10, {}, 'phương']);

console.log('Bài 3: ');
function convertString(input) {
    result = input.toString();
    console.log(result);
}

convertString([1, 2, 3]);

console.log('Bài 4: ');
function convertString2(input) {
    result = input.join(' - ');
    console.log(result);
}

convertString2(['Hưng', 'yêu', 'Phương']);

console.log('Bài 5: ');
function removeArray(anArray) {
    if(anArray.length < 3)
        anArray.shift();
    else if(anArray.length >= 2)
        anArray.splice(-2);
    return anArray;
}

console.log(removeArray([1, 2, 3, 4]));

console.log('Bài 6: ');
function addArray(animals) {
    if(animals.length == 0) 
        animals.push('Cat', 'Mouse');
    else if(animals.length == 1)
        animals.unshift('Elephant');
    else
        animals.splice(1, 1, 'Monkey', 'Tiger');
    return animals;
}

console.log(addArray([]));

console.log('Bài 7: ');
function combinedArray(products, newProducts) {
    result = products.concat(newProducts);
    return result;
}

console.log([], ['Sản phẩm 1']);