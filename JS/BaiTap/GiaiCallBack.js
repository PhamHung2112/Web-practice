var strings = ['Hưng', 'Hưng', 'Phương'];
var languages = [
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
console.log("Bài 1");
Array.prototype.forEach2 = function(myCallback) {
    if(typeof myCallback === 'function') {
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
                myCallback(this[index], index, this);
            }
        }
    } else {
        return `${myCallback} is not a function`;
    }
}

strings.forEach2(function(item, index) {
    console.log(index, item);
});

console.log("Bài 2");
Array.prototype.map2 = function(myCallback) {
    var output = [];
    if(typeof myCallback === 'function') {
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
                var result = myCallback(this[index], index, this);
                output.push(result);
            }
        }
        return output;
    } else {
        return `${myCallback} is not a function`;
    }
}

var test = strings.map(function(item, index) {
    return `${index}: ${item}`;
});

console.log(test);

console.log("Bài 3");
Array.prototype.some2 = function(myCallback) {
    var result = false;
    if(typeof myCallback === 'function') {
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
                if(myCallback(this[index], index, this)) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    } else {
        return `${myCallback} is not a function`;
    }
}

var test2 = languages.some2(function (item, index) {
    return item.name === 'Java';
});

console.log(test2);

console.log("Bài 4");
Array.prototype.every2 = function(myCallback) {
    var result = true;
    if(typeof myCallback === 'function') {
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
                if(myCallback(this[index], index, this) === false) {
                    result = false;
                    break;
                }
            }
        }
        return result;
    } else {
        return `${myCallback} is not a function`;
    }
}

var test3 = languages.every2(function (item, index) {
    return item.coin > 0;
});

console.log(test3);

console.log("Bài 5");
Array.prototype.find2 = function (myCallback) {
    if(typeof myCallback === 'function') {
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
                if(myCallback(this[index], index, this))
                    return this[index];
            }
        }
    } else {
        return `${myCallback} is not a function`;
    }
}

var test4 = languages.find2(function (item) {
    return item.name === 'Javascript';
});

console.log(test4);

console.log("Bài 6");
Array.prototype.filter2 = function (myCallback) {
    var output = [];
    if(typeof myCallback === 'function') {
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
                if(myCallback(this[index], this, index)) {
                    output.push(this[index]);
                }
            }
        }
        return output;
    } else {
        return `${myCallback} is not a function`;
    }
}
var test5 = languages.filter2(function (item) {
    return item.name === 'Javascript';
});

console.log(test5);

console.log("Bài 7");
Array.prototype.reduce2 = function (myCallback, initialValue) {
    if(typeof myCallback === 'function') {
        for(var index in this) {
            if(this.hasOwnProperty(index)) {
                initialValue = myCallback(initialValue, this[index], this);
            }
        }
        return initialValue;
    } else {
        return `${myCallback} is not a function`;
    }
}

var test6 = languages.reduce2(function (value, item) {
    return value += item.coin;
}, 0);
console.log(test6);