const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}

//浅拷贝
// const obj2 = obj1
// obj2.address.city = 'shanghai'
// console.log(obj1.address.city);

const obj2 = deepClone(obj1)
console.log(obj2);

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
// function deepClone (obj = {}) {
//     // 先判断 obj 是否为对象
//     if(typeof obj !== 'object' || obj == null) {
//         return obj
//     }

//     // 初始化result
//     let result
//     // 判断 obj 为数组还是对象
//     if(obj instanceof Array) {
//         result = []
//     } else {
//         result = {}
//     }

//     for(let key in obj) {
//         // 判断 是否为其原型的属性
//         if(obj.hasOwnProperty(key)) {
//             // 如果是自己的属性 就进行递归
//             result[key] = deepClone(obj[key])
//         }
//     }
//     return result
// }

// 手写一个深拷贝
// function deepClone(obj={}) {
//     // 判断obj 是否为对象
//     if(typeof obj !== 'object' || obj == null) {
//         return obj
//     }

//     // 初始化 resul 判断obj为数组还是对象
//     let result
//     if(obj instanceof Array) {
//         result = []
//     } else {
//         result = {}
//     }

//     for(let key in obj) {
//         // 判断是否是其原型属性
//         if(obj.hasOwnProperty(key)) {
//             result[key] = deepClone(obj[key])
//         }
//     }
//     return result
// }

function deepClone (obj) {
    if(typeof obj !== 'object' || obj === null) return obj
    
    let result
    if(obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}
