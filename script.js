document.addEventListener("DOMContentLoaded", function() {

})

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
}

evensSquared = (numbers) => (numbers.map((num) => (num ** 2)).filter((square) => (square % 2 === 0)))

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

oddsOut = (...nums) => (nums.filter((num) => (num % 2 === 0)))

findMin = (...nums) => (nums.reduce((min, cur) => (Math.min(min, cur))))

mergeObjects = (ob1, ob2) => ({...ob1, ...ob2})

doubleAndReturnArgs = (arr, ...args) => ([...arr, ...(args.map((num) => num * 2))])

function removeRandom(items) {
    let copyItems = [...items]
    copyItems.splice(Math.floor(Math.random()*copyItems.length), 1)
    return copyItems
}

extend = (array1, array2) => ([...array1, ...array2])

addKeyVal = (obj, key, val) => ({...obj, [key]: val})

function removeKey(obj, key) {
    let copyObj = {...obj}
    delete copyObj[key]
    return copyObj
}

combine = (obj1, obj2) => ({...obj1, ...obj2})

update = (obj, key, value) => ({...obj, [key]: value})