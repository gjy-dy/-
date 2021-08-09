const m = new Map()

// 增
m.set('a', 'aa') // 第一个为键，第二个为值
m.set('b', 'bb')
m.set('c', 'cc')

// 删
m.delete('b')
// m.clear() // 把字典清空

// 改
m.set('a', 'aaa')

// 查
console.log(m.get('a'));
console.log(m.get('b'));
console.log(m.get('c'));
