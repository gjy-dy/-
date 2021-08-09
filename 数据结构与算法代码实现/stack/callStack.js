// const func1 = () => {
//     func2()
// }
// const func2 = () => {
//     func3()
// }
// const func3 = () => {}

// func1()
nums=[1,2,3,1]
if(nums.length === 1) return false
const unique = [...new Set(nums)]
if(unique.length < nums.length) {
    return true
} else {
    return false
}