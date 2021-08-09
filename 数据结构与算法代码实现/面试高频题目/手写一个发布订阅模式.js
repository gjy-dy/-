let eventEmitter = {
    list: {},
    // 订阅
    on (event, fn) {
        (this.list[event] || (this.list[event] = [])).push(fn)
        return this
    },
    // 监听一次
    once (event, fn) {
        function on () {
            this.off(event, on)
            fn.apply(this, arguments)
        }
        on.fn = fn
        this.on(event, on)
        return this
    },
    // 取消订阅
    off (event, fn) {
        let fns = this.list[event]
        if(!fns) return false
        if(!fn) {
            fns && (fns.length = 0)
        } else {
            let cb
            for (let i = 0; i < fns.length; i++) {
                cb = fns[i]
                if (cb === fn || cb.fn === fn) {
                    fns.splice(i, 1)
                    break
                }
            }
        }
        return this
    },
    // 发布
    emit () {
        let event = [].shift.call(arguments)
        let fns = [...this.list[event]]
        if(!fns || fns.length === 0) {
            return false
        }
        fns.forEach(fn => {
            fn.apply(this, arguments)
        })
        return this
    }
}

function user1 (content) {
    console.log('用户1订阅了：', content)
}
function user2 (content) {
    console.log('用户2订阅了：', content)
}
function user3 (content) {
    console.log('用户3订阅了:', content);
}

function user4 (content) {
    console.log('用户4订阅了:', content);
}

// 订阅
eventEmitter.on('article1', user1);
eventEmitter.on('article1', user2);
eventEmitter.on('article1', user3);

// 取消user2方法的订阅
eventEmitter.off('article1', user2);

eventEmitter.once('article2', user4)

// 发布
eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
eventEmitter.emit('article2', 'Javascript 观察者模式');
eventEmitter.emit('article2', 'Javascript 观察者模式');

// eventEmitter.on('article1', user3).emit('article1', 'test111');