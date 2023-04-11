//  对reduce的应用
let arr = [1, [2, 3, [3, 4, 5]]];
let str_json = JSON.stringify(arr)
let str = arr.join('');
console.log(str, str_json)
let arr_flat = str.replace(/(\]|\[])/g, '').split(',')

let newArr = function (arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? newArr(cur) : cur)
    }, [])
}

console.log(newArr(arr), arr_flat)