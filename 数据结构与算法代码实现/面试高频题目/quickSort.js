// var quickSort = function (arr) {
//     // 检查数组的元素个数，如果小于等于1，就返回
//     if(arr.length <= 1) {
//         return arr
//     }

//     // 选择基准 pivot
//     var pivotIndex = Math.floor(arr.length / 2)
//     var pivot = arr.splice(pivotIndex, 1)[0]
//     var left = []
//     var right = []

//     // 开始遍历数组，小于基准的放入左边，大于的放右边
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     // 最后使用递归不断重复这个过程
//     return quickSort(left).concat([pivot], quickSort(right))
// }
console.log(quickSort([1,7,2,5,6,3,4,8]));
// 快排
function quickSort(arr) {
    // 判断数组长度
    if(arr.length<=1) {
        return arr
    }

    // 设置基准
    let cenIndex = Math.floor(arr.length / 2)
    let cen = arr.splice(cenIndex, 1)[0]

    let left = []
    let right = []

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < cen) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([cen], quickSort(right))
}