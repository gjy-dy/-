// 实现一个数组扁平化的函数 flatten
// function flatten (arr, depth = 1) {
//     if (depth === 0) return arr
//     return arr.reduce((prev, next) => prev.concat(Array.isArray(next) ? flatten(next, depth-1) : next), [])
// }


// function flatten (arr, depth = 1) {
//     if(depth === 0) return arr
//     return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b, depth - 1) : b), [])
// } 

const a = flatten([1, 2, 3, [4, [5, 6]]])
const b = flatten([1, 2, 3, [4, [5, 6]]], 2)
const c = flatten([1, 2, 3, [4, [5, 6]]], 1)
console.log(a, b, c)

function flatten(arr, depth = 1) {
    if(depth === 0) return arr
    return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b, depth-1) : b), [])
}