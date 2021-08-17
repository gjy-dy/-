// 使用字典
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

/**
 * 解题思路:
 * 先找出所有的包含T的子串
 * 找出长度最小那个子串，返回即可
 * 
 * 解题步骤：
 * 用双指针维护一个滑动窗口
 * 移动右指针，找到包含T的子串，移动左指针，尽量减少包含T的子串的长度
 * 记录满足要求的所有子串
 * 循环上述过程，找出包含 T 的最小子串
 */
// var minWindow = function(s, t) {
//     let l = 0;
//     let r = 0;

//     // 新建一个字典，存放需要的字符以及个数
//     const need = new Map()

//     // t = 'ABC'
//     for(let c of t) {
//         // 将字符串 t 中的字符存放到 字典c中
//         need.set(c, need.has(c) ? need.get(c) + 1 : 1)
//     }
//     // console.log(need) // Map {'A' => 1, 'B' => 1, 'C' => 1}

//     let needType = need.size

//     let res = ''

//     // 移动右指针
//     while(r < s.length) {
//         // 存放右指针的字符
//         const c = s[r]
//         // 如果字典中有该字符
//         if(need.has(c)) {
//             // 就删除字典中该字符的数量
//             need.set(c, need.get(c) - 1)
//             // 如果该字符的数量为0
//             if(need.get(c) === 0) {
//                 // 就要删除总的字符的长度
//                 needType -= 1
//             }
//         }
//         // 移动左指针
//         while(needType === 0) {
//             // 截取左指针到右指针对应的字符串
//             const newRes = s.substring(l, r + 1)
//             // 比较找到最小字符串的长度
//             if(!res || newRes.length < res.length) {
//                 res = newRes
//             }
//             // 保存左指针对应的字符
//             const c2 = s[l]
//             // 如果字典中有左指针的字符
//             if(need.has(c2)) {
//                 // 将字典中的对应的字符数量+1
//                 need.set(c2, need.get(c2) + 1)
//                 // 如果该字符的数量为1
//                 if(need.get(c2) === 1) {
//                     // 就增加总字符串的长度
//                     needType += 1
//                 }
//             }
//             // 循环左指针
//             l += 1
//         }   
//         // 循环右指针 
//         r += 1
//     }
//     return res
// }

console.log(minWindow('ADOBECODEBANC', 'ABC'));

function minWindow(s, t) {
    let l = 0
    let r = 0

    const need = new Map()
    for(let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }

    let needType = need.size
    let res = ''

    while(r < s.length) {
        const c = s[r]
        if(need.has(c)) {
            need.set(c, need.get(c) - 1)
            if(need.get(c) === 0) {
                needType--
            }
        }

        while(needType === 0) {
            const newRes = s.substring(l, r + 1)
            if(!res || newRes.length < res.length) res = newRes
            const c2 = s[l]
            if(need.has(c2)) {
                need.set(c2, need.get(c2) + 1)
                if(need.get(c2) === 1) {
                    needType++
                }
            }
            l++
        }
        r++
    }
    return res
}
