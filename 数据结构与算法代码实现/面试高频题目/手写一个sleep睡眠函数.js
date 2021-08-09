// 比如 sleep(1000)代表等待 1000ms
// 方法一：ES5 方式实现
// function sleep(callback, time) {
//     if(typeof callback == 'function') {
//         setTimeout(callback, time)
//     }
// }
// function output() {
//     console.log(111)
// }
// sleep(output, 2000)

// 方法二：ES6 方式实现
const sleep = time => {
    return new Promise(reslove => setTimeout(reslove, time))
}
sleep(1000).then( () => { console.log(1) })