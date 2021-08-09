// 判断是否是对象
// function isObject(obj) {
//     return typeof obj === 'object' && obj !== null
// }


// function isEqual(obj1, obj2) {
//     if(!isObject(obj1) || !isObject(obj2)) {
//         // 值类型（注意，参与 equal 的一般不会是函数）
//         return obj1 === obj2
//     }

//     if(obj1 === obj2) {
//         return true
//     }
//     // 两个都是对象或数组，而且不相等，考虑深度，即子属性
//     // 1. 先取出 obj1 和 obj2 的 keys，比较个数
//     const obj1Keys = Object.keys(obj1)
//     const obj2Keys = Object.keys(obj2)
//     if(obj1Keys.length !== obj2Keys.length) {
//         return false
//     }
//     // 2. 以 obj1 为基准，和 obj2 依次递归比较
//     for(let key in obj1) {
//         // 比较当前key的value --- 递归
//         const res = isEqual(obj1[key], obj2[key])
//         if(!res) {
//             return false
//         }
//     }
//     return true

// }


// 测试
const obj1 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}

const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}

// console.log(obj1 === obj2);
console.log(isEqual(obj1, obj2))

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}

function isEqual(obj1, obj2) {
    if(!isObject(obj1) || !isObject(obj2)) return obj1 === obj2
    if(obj1 === obj2) return true

    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)

    if(obj1Keys.length !== obj2Keys.length) return false
    for(let key in obj1) {
        const res = isEqual(obj1[key], obj2[key])
        if(!res) return false
    }
    return true
}