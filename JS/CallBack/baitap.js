var languages = [
    'Javascript',
    'PHP',
    'C#',
    'Java'
];

console.log("- Bài 1: forEach2()");

Array.prototype.forEach2 = function(callback) {
    var arrayLength = languages.length;
    if(typeof callback === 'function') {
        for(var i=0; i<arrayLength; i++)
            callback(this[i], i);
    } else {
        return `${callback} is not a function`;
    }
}

var check = languages.forEach2(function(language, index) {
    console.log(language, index);
});

console.log("- Bài 2: map2()");

Array.prototype.map2 = function(callback) {
    var arrayLength2 = languages.length, output = [];
    if(typeof callback === 'function') {
        for(var i=0; i<arrayLength2; i++) {
            var result = callback(this[i], i);
            output.push(result);
        }
        return output;
    } else {
        return `${callback} is not a function`;
    }
}

var check2 = languages.map2(function(language, index) {
    return `
        ID: ${index+1} Khóa học: ${language}
    `
});

console.log(check2.join(''));

var languages2 = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'PHP',
        coin: 150
    },
    {
        id: 3,
        name: 'Javascript',
        coin: 100
    },
];

console.log("- Bài 3: find()");
Array.prototype.find2 = function(callback) {
    var arrayLength3 = languages2.length;
    if(typeof callback === 'function') {
        for(var i = 0; i < arrayLength3; i++) {
            
        }
    } else {
        return `${callback} is not a function`; 
    }
}

var check3 = languages2.find(function(language, index) {
    return language.name === 'Javascript';
});

console.log(check3);