Promise.race = function (promises) {
  // 返回一个将resolve和reject传给数组中每一个promise的then方法的一个promise对象
  // 第一个resolve或者reject就会作为这个Promise对象的状态了
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  });
};

function myRace(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  });
}
