// 去重
const arr = [1, 2, 1, 2]
let newArr = new Set(arr) // 这样得到的是一个有1，2的集合
newArr = [...new Set(arr)]  // 变成数组

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(1)

// 求交集
const set2 = new Set([2, 3])
// 首先将set 变为数组，再用数组的 filter 方法 判断set里的item在set2里面有没有
const set3 = new Set([...set].filter(item => set2.has(item))) 