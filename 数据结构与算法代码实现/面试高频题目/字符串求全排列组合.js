function permutate (str) {
    // 保存每一轮递归的排列结果
    let result = []
    // 初始条件：长度为1
    if(str.length <= 1) {
        return [str]
    } else {
        // 求剩余子串的全排列，对每个排列进行遍历
        let preResult = permutate(str.slice(1))
        for(let j = 0; j < preResult.length; j++) {
            for(let k = 0; k < preResult[j].length + 1; k++) {
                // 将首字母插入 k 位置
                let temp = preResult[j].slice(0, k) + str[0] + preResult[j].slice(k)
                result.push(temp)
            }
        }
        return result
    }
}

permutate('a')
permutate('abc')

