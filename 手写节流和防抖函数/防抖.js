/* 
    防抖，与节流的区别是，规定的时间内，频繁点击的函数只触发最后一次，前面的均不生效
    应用场景：搜索框搜索输入，窗口大小 resize 变化
*/

//fn需要防抖的函数，delayTime为规定的时间区间
function noBounce(fn, delayTime) {
  let timer = null;
  return function () {
    // 将前面的定时器清楚
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this);
    }, delayTime);
  };
}

document.getElementById("box").onclick = noBounce(function () {
  console.log("按钮被点击" + Date.now());
}, 2000);

function debounce(fn, delayTime) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn.apply(this), delayTime);
  };
}

function debounce(fn, delaytime) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this);
    }, delaytime);
  };
}
