//map();
console.log('map();');
var myArray = [
    {
        id: 1,
        name: 'PHP',
        coin: 0
    },
    {
        id: 2,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 3,
        name: 'Java',
        coin: 0
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 300
    },
    {
        id: 5,
        name: 'Python',
        coin: 200
    }
];

function learnMapinJS(myArray) {
    var fixed = myArray.map(function(items, index) {
        return {
            id: items.id,
            name: `Khóa học ${items.name}`, 
            coin: `${items.coin} coin`,
            coinText: `Giá: ${items.coin}`,
            index: index
        };
    });
    console.log(fixed);
}

learnMapinJS(myArray);

//Example
var inputs = [NaN, 'hi', ''];

function convertToBoolean(inputs) {
    var convert = inputs.map(function(items) {
        return Boolean(items);
    });
    console.log(convert);
};

convertToBoolean(inputs);