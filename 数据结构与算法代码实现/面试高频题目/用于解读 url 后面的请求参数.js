// 给一个`url=http://www.meituan.com?a=c&b=d&e=f`
// 写一个函数获取 a b 的值
url='http://www.meituan.com?a=c&b=d&e=f'

const result = getValue(url)

console.log(result)

// function getValue(url){
//     // 先通过?把字符串拆分成数组 并取得第二项
//     let searchParam = url.split('?')[1] // split() 把一个字符串分割成字符串数组
//     // 再通过&把字符串在拆分成数组
//     let searchItemParams = searchParam.split('&') 
//     let arr = {}
//     let value = {}
//     if(searchItemParams.length) {
//         // 遍历 searchItemParams 的每一项
//         searchItemParams.forEach((item, index) => {
//             arr[index] = item.split('=')
//             value[arr[index][0]] = arr[index][1]
//         })
//         return value
//     }
// }

function getValue(url) {
    let urlParam = url.split('?')[1]
    let urlParamItems = urlParam.split('&')

    let arr = {}
    let value = {}
    if(urlParamItems.length) {
        urlParamItems.forEach((item, index) => {
            arr[index] = item.split('=')
            value[arr[index][0]] = arr[index][1]
        })
    }
    return value
}