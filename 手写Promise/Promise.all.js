function myAll(promises) {
    return new Promise(function (resolve, reject) {
        let count = 0;
        let len = promises.length;
        let resArr = [];
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then((value) => {
                count++;
                resArr[i] = value;
                if (count === len) {
                    return resolve(resArr)
                }
            }, err => {
                return reject(err)
            })
        }
    })
}