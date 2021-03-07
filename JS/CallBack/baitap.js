var languages = [
    'Javascript',
    'PHP',
    'C#',
    'Java'
];

console.log("- Bài 1: forEach2()");

Array.prototype.forEach2 = function(callback) {
    var arrayLength = this.length;
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
    var arrayLength2 = this.length, output = [];
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
        name: 'Java',
        coin: 100
    },
    {
        id: 4,
        name: 'Javascript',
        coin: 2500
    }
];

console.log("- Bài 3: find()");

Array.prototype.find2 = function(myCallback) {
    var arrLength = this.length;
    if(typeof myCallback === 'function') {
        for(var i = 0; i < arrLength; i++) {
            if(myCallback(this[i], i))
                return this[i];
        }
        return undefined;
    } else {
        return `${myCallback} is not a function`; 
    }
}


var check3 = languages2.find2(function(language2) {
    return language2.name === 'Javascript';
});

console.log(check3);

console.log("- Bài 4: filter()")

Array.prototype.filter2 = function(myCallback) {
    var arrLength2 = this.length, output = [];
    if(typeof myCallback === 'function') {
        for(var i = 0; i<arrLength2; i++) {
            if(myCallback(this[i], i))
                output.push(this[i]);
        }
        return output;
    } else {
        return `${myCallback} is not a function`; 
    }
}

var check4 = languages2.filter2(function(language2) {
    return language2.name === 'Javascript2';
});

console.log(check4);

console.log("- Bài 4: some()")

Array.prototype.some2 = function(myCallback) {
    var arrLength = this.length;
    if(typeof myCallback === 'function') {
        for(var i=0; i<arrLength; i++) {
            if(myCallback(this[i], i)) 
                return true;
        }
        return false;
    } else {
        return `${myCallback} is not a function`; 
    }
}

var check5 = languages2.some2(function(language2) {
    return language2.name === 'PHP';
});

console.log(check5);

console.log("- Bài 5: every()")

Array.prototype.some2 = function(myCallback) {
    var arrLength = this.length;
    if(typeof myCallback === 'function') {
        for(var i=0; i<arrLength; i++) {
            if(myCallback(this[i], i) === false)  
                return false;
        }
        return true;
    } else {
        return `${myCallback} is not a function`; 
    }
}

var check6 = languages2.some2(function(language2) {
    return language2.name === 'Javascript';
});

console.log(check6);

console.log("- Bài 6: reduce()");
Array.prototype.reduce2 = function(myCallback, initialValue) {
    var arrLength = this.length;
    if(typeof myCallback === 'function') {
        for(var i = 0; i < arrLength; i++) {
            initialValue = myCallback(initialValue, this[i], i); 
        }
        return initialValue;
    } else {
        return `${myCallback} is not a function`; 
    }
}

var check7 = languages2.reduce2(function(totalCoin, language2) {
    return totalCoin += language2.coin;
}, 0);

console.log(check7);