console.log('Bài 1');
function run(input) {
    if (typeof input === 'string' || typeof input === 'object' && input.includes('F8') == true)
        return true;
    else if(Array.isArray(input) == true && input.includes('F8') == true)
        return false;
    else
        return false;
}

console.log(run([8, 'F8']));