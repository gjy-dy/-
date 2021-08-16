// 先用 sort 方法去重, 相邻元素对比法
// function unique(arr) {
//     arr = arr.sort()
//     let newArr = [arr[0]]
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] !== arr[i-1]) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

function unique (arr) {
    arr = arr.sort()
    let newArr = [arr[0]]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i - 1]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}