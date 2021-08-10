var str = 'aaavvvduuueeeaaaaabssa'
maxStrCount(str)

function maxStrCount (str) {
    let arr = str.split('')
    let strObj = {}
    for(let key of arr) {
        if (strObj[key]) {
            strObj[key]++
        } else {
            strObj[key] = 1
        }
    }
    let max = 0
    let maxKey = null
    for(let key in strObj) {
        if(max < strObj[key]) {
            max = strObj[key]
            maxKey = key
        }
    }
    console.log('出现最多的字符是' + maxKey + ', 出现了' + max + '次')
}