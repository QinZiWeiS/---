/*
一个函数执行一次之后，只有大于设定的执行周期后才会执行第二次，规定的时间内只会调用最开始调用的那次
使用场景：1.滚动加载更多，2.高频的点击事件，3.表单的高频提交
*/
// fn为需要节流的函数，delayTime为规定的时间周期
function throttle(fn, delayTime) {
  let lastTime = 0;
  return function () {
    let nowTime = Date.now();
    if (nowTime - lastTime > delayTime) {
      console.log(this);
      // 将fn的this指向被调用的dom节点
      fn.call(this);
      lastTime = nowTime;
    }
  };
}

document.getElementById("box").onclick = throttle(function () {
  console.log(2);
  console.log("按钮被点击" + Date.now());
}, 2000);

function jieliu(fn, durTime) {
  let lastTime = 0;
  return function () {
    let nowTime = Date.now();
    if (nowTime - lastTime > durTime) {
      fn.apply(this);
      lastTime = nowTime;
    }
  };
}
