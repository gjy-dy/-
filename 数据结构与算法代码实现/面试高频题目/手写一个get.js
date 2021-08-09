import _ from 'lodash'
var object = {
    'a' : [{
        'b': {
            'c': 3
        }
    }]
}
console.log(_.get(object, 'a[0].b.c'));  //3
console.log(_.get(object, 'a[0]["b"]["c"]'));  //3
console.log(_.get(object, 'a[100].b.c', 'default')) // dedault

function myGet (object, path, defaultValue = undefined) {
    // a[3].b -> a.3.b -> [a, 3, b]
    const paths = path.replace(/\[(\w+)\]/g, '.$1').replace(/\["(\w+)"\]/g, '.$1').replace(/\['(\w+)'\]/g, '.$1').split('.')

    let result = object
    for(const p of paths) {
        result = Object(result)[p]
        if(result === undefined) return defaultValue
    }
    return result
}
console.log(myGet(object, 'a[0].b.c'));  //3
console.log(myGet(object, "a[0]['b']['c']"));  //3
console.log(myGet(object, 'a[100].b.c', 'default')) // dedault