// url 链接：url= http://www.baidu.com?id=001&type=string
// function changeLinkUrl(url,param){
//     let urlResult = url.split('?')[0].concat('?')
//     let urlParam = url.split('?')[1]
//     let urlItemParams = urlParam.split('&')

//     let arr = {}
//     let value = {}

//     if(urlItemParams.length) {
//         urlItemParams.forEach((item, index) => {
//             arr[index] = item.split('=')
//             value[arr[index][0]] = arr[index][1]
//         })
//     }
//     for(let key in param) {
//         value[key] = param[key]
//     }
//     for(let key in value) {
//         urlResult = urlResult.concat(key,'=',value[key], '&')
//     }
//     urlResult = urlResult.slice(0, urlResult.length-1)
//     return urlResult
// }

function changeLinkUrl (url, param) {
    let urlParam = url.split('?')[1]
    let urlParamItems = urlParam.split('&')
    let finalUrl = url.split('?')[0] + '?'

    let arr = {}
    let value = {}
    if(urlParamItems.length) {
        urlParamItems.forEach((item, index) => {
            arr[index] = item.split('=')
            value[arr[index][0]] = arr[index][1]
        })
    }

    for(let key in param) {
        value[key] = param[key]
    }

    for(let key in value) {
        finalUrl = finalUrl.concat(key, '=', value[key], '&')
    }

    return finalUrl.slice(0, finalUrl.length - 1)
}

const url= 'http://www.baidu.com?id=001&type=string'
const param = {
    id: '123',
    type: 'array'
}
console.log(changeLinkUrl(url, param));

