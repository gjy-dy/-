// function pAll (_promise) {
//     return new Promise((resolve, reject) => {
//         // Iterator => Array
//         const promises = Array.from(_promise)

//         const r = []
//         const len = promises.length
//         let count = 0
//         for(let i = 0; i<len; i++) {
//             Promise.resolve(promises[i]).then(res => {
//                 r[i] = res
//                 if(++count === len) {
//                     resolve(r)
//                 }
//             }).catch(err => reject(err))
//         }
//     })
// }

function pAll(_promise) {
    return new Promise((resolve, reject) => {
        const promises = Array.from(_promise)
        const r = []
        let count = 0
        const len = promises.length
        for(let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then(res => {
                r[i] = res

                if(++count === len) {
                    resolve(r)
                }
            }).catch(err => reject(err))
        }
    })
}
