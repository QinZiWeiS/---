function myFlat1(arr) {
    return arr.reduce((pre, cur) =>
        pre.concat(Array.isArray(cur) ? myFlat1(cur) : cur)
        , [])
}


function myFlat2(arr) {
    let str = JSON.stringify(arr);
    return str.replace(/(\[|\])/g, '').split(',');
}

let arr = [1, 2, 3, [12, [123, [123]]]]

console.log(myFlat1(arr), myFlat2(arr))