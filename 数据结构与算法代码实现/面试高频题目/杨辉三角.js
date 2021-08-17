function combination (m, n) {
    if(n == 0) return 1
    else if(m === n) return 1
    else {
        return combination(m-1, n-1) + combination(m-1, n) //中间的数为前一行的两个数相加
    }
}

function Print(n) {
    for(let i = 0; i < n; i++) {
        let arr = [] // 放第 i 行的数
        for(let j = 0; j <= i; j++) {
            arr.push(combination(i, j))
        }
        console.log(arr.join(' '))
    }
}

Print(6)