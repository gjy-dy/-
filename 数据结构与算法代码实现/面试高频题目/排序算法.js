// 选择排序
function selectSort (arr) {
    if(arr.length <= 1) return arr
    let minIndex, temp
    for(let i = 0; i < arr.length; i++) {
        minIndex = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
console.log(selectSort([1,3,2,6,4,7,3]));

// 插入排序
function insertSort (arr) {
    for(let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while(arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}
console.log(insertSort([1,3,2,6,4,7,3]));