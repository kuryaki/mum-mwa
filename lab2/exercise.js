/**
 Write code to make this work
    [1,2,3,4,5,6,7,8].even() // [2,4,6,8]
    [1,2,3,4,5,6,7,8].odd()  // [1,3,5,7]
 */

Array.prototype.even = function () {
    return this.filter(e => e%2 === 0);
};

Array.prototype.odd = function () {
    return this.filter(e => e%2 !== 0);
};

const arr = [1,2,3,4,5,6,7,8];

console.log(arr.even());
console.log(arr.odd());
