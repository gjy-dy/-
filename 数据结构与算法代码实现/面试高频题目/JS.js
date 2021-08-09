let obj = {
    name: 'lee',
    sex: 'male',
    age: 18
}
Object.getOwnPropertyNames(obj).forEach(key => {
    console.log(key, obj[key]);
})

let obj1 = {
    name: 'lee',
    sex: 'male',
    age: 18
}
Reflect.ownKeys(obj1).forEach(key => {
    console.log(key, obj1[key]);
})