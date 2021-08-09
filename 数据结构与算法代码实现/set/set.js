let mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('some')

let obj = {a: 1, b: 2}
mySet.add(obj)
mySet.add(obj)
const has = mySet.has(obj)
mySet.delete(5)

for(let item of mySet) console.log(item);

// 把 set 转换为 Array
const myArr = [...mySet]
const myArr2 = Array.from(mySet)

// 把 Array 转换为 Set
const mySet2 = new Set([1,2,3,4])

// 求交集
const intersection = new Set([...mySet].filter(item => mySet2.has(item)))

// 求差集 即mySet2里面没有 但是mySet里面有的值
const difference = new Set([...mySet].filter(item => !mySet2.has(item)))

