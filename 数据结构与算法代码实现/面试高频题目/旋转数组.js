// var rotate = function(nums, k) {
//     let arr = nums.splice(0, k+1)
//     nums = nums.concat(arr)
// }
// nums = [1,2,3,4,5,6,7]
// k = 3
// console.log(rotate(nums, k));

// var moveZeroes = function(nums) {
//     let count=0
//     for(let i=0; i<nums.length; i++) {
//         if(nums[i]===0) {
//             nums.splice(i, 1)
//             count++
//             i--
//         }
//     }
//     for(let i=0; i<countl i++) {
//         nums.push(0)
//     }
// }
// let nums=[0,0,1]
// moveZeroes(nums)

var reverseWords = function(s) {
    var newArr = s.split(' ')
    let str = []
    for(i=0; i<newArr.length; i++) {
       str[i] = newArr[i].split('').reverse().join('')
    }

    s=str.join(' ')
    return s
};

reverseWords("Let's take LeetCode contest")