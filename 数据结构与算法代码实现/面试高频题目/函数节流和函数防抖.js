// 函数防抖：在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时

// test
var debounceRun = debounce(function () {
    console.log(123);
}, 2000)
// 只有当鼠标移动停止 2s 打印 123
window.addEventListener('mousemove', debounceRun)


// 防抖
// function debounce(fn, delay) {
//     let timer
//     return function() {
//         if(timer) {
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => {
//             fn(...arguments)
//         }, delay)
//     }
// }
// // 节流
// function throttle(fn, delay) {
//     let timer
//     return function () {
//         if(timer) return
//         timer = setTimeout(() => {
//             fn(...arguments)
//             timer = null
//         }, delay)
//     }
// }


// 防抖
function debounce (fn, delay) {
    let timer
    return function () {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...arguments)
        }, delay);
    } 
}

// 节流
function throttle (fn, delay) {
    let timer
    return function () {
        if(timer) return
        timer = setTimeout(() => {
            fn(...arguments)
            timer = null
        }, delay);
    }
}