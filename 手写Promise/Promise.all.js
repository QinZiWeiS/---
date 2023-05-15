function myAll(promises) {
  return new Promise(function (resolve, reject) {
    let count = 0;
    let len = promises.length;
    let resArr = [];
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          count++;
          resArr[i] = value;
          if (count === len) {
            return resolve(resArr);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    }
  });
}

function myAll(promises) {
  return new Promise((resolve, reject) => {
    let len = promises.length;
    let res = [];
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          res[i] = value;
          if (i + 1 === len) {
            return resolve(res);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    }
  });
}

function myAll(promises) {
  return new Promise((reject, resolve) => {
    let len = promises.length;
    let res = [];
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          res[i] = value;
          if (i + 1 === len) {
            resolve(res);
          }
        })
        .catch((err) => {
          return reject(err);
        });
    }
  });
}
