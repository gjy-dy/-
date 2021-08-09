// /**
//  * 实现call(obj, arg, arg...)
//  * 解释：
//  * 通过Function.prototype.mycall绑定了mycall方法，所有的函数都可以直接访问mycall
//  */
var name = 'alex'
var obj = {
  name: 'lee'
}

function fn(a, b, c) {
  console.log(a + b + c + this.name)
}

// Function.prototype.mycall = function (obj) {
//   // 先判断传入的第一个参数是否是 null 或 undefined
//   obj = obj ? Object(obj) : window
//   obj.fn = this

//   let args = [...arguments].slice(1)
//   let result = obj.fn(...args)

//   delete obj.fn
//   return result
// }

// // 模拟 apply 方法
// Function.prototype.myapply = function (obj, arr) {
//   // 判断 obj 是否是 null undefined
//   obj = obj ? Object(obj) : window
//   obj.fn = this
//   let result
//   if(!arr) {
//     result = obj.fn()
//   } else {
//     result = obj.fn(...arr)
//   }
//   delete obj.fn
//   return result
// }

// // 模拟 bind
// Function.prototype.mybind = function (obj, ...arg1) {
//   return (...arg2) => {
//     return this.call(obj, ...arg1, ...arg2)
//   }
// }

// var name = 'alex'
// var obj = {
//   name: 'lee'
// }
// function fn(a, b, c) {
//   console.log(a + b + c + this.name)
// }

// 实现 call
Function.prototype.myCall = function(obj) {
  obj = obj ? Object(obj) : window
  obj.fn = this

  let args = [...arguments].slice(1)
  let result = obj.fn(...args)

  delete obj.fn
  return result
}

// 实现 apply
Function.prototype.myApply = function(obj, arr) {
  obj = obj ? Object(obj) : window
  obj.fn = this
  let result
  if(!arr) {
    result = obj.fn()
  } else {
    result = obj.fn(...arr)
  }
  delete obj.fn
  return result
}

// 实现 bind

Function.prototype.myBind = function(obj, ...arg1) {
  return (...arg2) => {
    return this.call(obj, ...arg1, ...arg2)
  }
}

fn.myCall(obj, "我的", "名字", "是") // 我的名字是lee
fn.myCall(null, "我的", "名字", "是") // 我的名字是alex
fn.myCall(undefined, "我的", "名字", "是") // 我的名字是alex

fn.myApply(obj, ["我的", "名字", "是"]); // 我的名字lee
fn.myApply(null, ["我的", "名字", "是"]); // 我的名字是alex
fn.myApply(undefined, ["我的", "名字", "是"]); // 我的名字是alex

fn.myBind(obj, "我的", "名字")("是") 
fn.myBind(obj)( "我的", "名字", "是")
fn.myBind(null, "我的", "名字")("是") 
fn.myBind(undefined)( "我的", "名字", "是")
