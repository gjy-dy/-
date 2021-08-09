Array.myIsArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}


// 验证
console.log(Array.myIsArray([]));
console.log(Array.myIsArray({}));
console.log(Array.myIsArray('123'));
console.log(Array.myIsArray(/123/));
console.log(Array.myIsArray([1, 2, 3]));
