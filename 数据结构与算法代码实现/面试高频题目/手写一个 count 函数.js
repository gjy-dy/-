// 每次调用一个函数自动加1
var count = (function () {
    var a = 0;
    return function () {
        console.log(++a);
    }
})()

count()  // 1
count()  // 2
count()  // 3