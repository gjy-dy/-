// const stack = []
// stack.push(1)
// stack.push(2)

// // pop() 方法 移除数组的最后一项并返回它
// const item1 = stack.pop()
// const item2 = stack.pop()

// 有效的括号
s='[][]{}'
var isValid = function (s) {
    if(s.length % 2 !== 0) return false
    const stack = []
    for(let i=0; i<s.length; i++) {
        if(s[i]==='(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            const t = stack[stack.length - 1]
            if(
                (t === '(' && s[i] === ')') ||
                (t === '[' && s[i] === ']') ||
                (t === '{' && s[i] === '}') 
            ) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}


