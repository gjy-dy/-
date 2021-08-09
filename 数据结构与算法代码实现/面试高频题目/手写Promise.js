const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn) {
    // 保存初始化状态
    var self = this
    // 初始化状态
    this.state = PENDING
    // 用于保存 resolve 或者 reject 传入的值
    this.value = []
    // 用于保存 resolve 的回调函数
    this.resolvedCallbacks = []
    // 用于保存 reject 的回调函数
    this.rejectedCallbacks = []
    // 状态转变为 resolved 方法
    function resolve(value) {
        // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
        if(value instanceof myPromise) {
            return value.then(resolve, reject)
        }
        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            // 只有状态为 pending 时才能改变
            if(self.state === PENDING) {
                self.state === RESOLVED
                self.value = value
                self.resolvedCallbacks.forEach((callback) => {
                    callback(value)
                })
            }
        }, 0)
    }
    // 状态转变为 rejected 方法
    function reject(value) {
        setTimeout(() => {
            if(self.state === PENDING) {
                self.state = REJECTED
                self.value = value
                self.rejectedCallbacks.forEach((callback) => {
                    callback(value)
                })
            }
        }, 0)
    }
    try {
        fn(resolve, reject)
    } catch(e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : function (value) { return value }
    onRejected = typeof onRejected === 'function' ? onRejected : function (error) { return error }

    if(this.state === PENDING) {
        this.resolvedCallbacks.push(onResolved)
        this.rejectedCallbacks.push(onRejected)
    }

    if(this.state === RESOLVED) {
        onResolved(this.value)
    }
    if(this.state === REJECTED) {
        onRejected(this.value)
    }
}