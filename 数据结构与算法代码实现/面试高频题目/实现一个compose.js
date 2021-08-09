import _ from 'lodash'
// 实现一个compose 从右向左
const add10 = x => x + 10
const mul10 = x => x * 10
const add100 = x => x + 100
//compose(add10, mul10, add100)(10) // (10 + 100) * 10 + 10 = 1110

const  myCompose = (...fns) => {
    return fns.reduce((f, g) => (...args) => f(g(...args)))
} 
console.log(myCompose(add10, mul10, add100)(10) )