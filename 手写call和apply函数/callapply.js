Function.prototype.myCall = function (context) {
  context = context || window;
  let fn = Symbol();
  context[fn] = this;
  let arg = [...arguments].slice(1);
  context[fn](...arg);
  delete context[fn];
};

Function.prototype.myApply = function (context) {
  context = context || window;
  let fn = Symbol();
  context[fn] = this;
  let arg = [...arguments][1] || [];
  context[fn](...arg);
  delete context[fn];
};

var obj = {
  name: "objName",
};
function consoleInfo(sex, weight) {
  console.log(this.name, sex, weight);
}
var name = "globalName";
consoleInfo.myCall(obj, "woman", 120);
consoleInfo.myApply(obj);
consoleInfo.myApply(obj, ["woman", 120]);

function myCall(context) {
  let context = context || window;
  let fn = Symbol();
  context[fn] = this;
  let args = [...arguments].slice(1);
  context[fn](...args);
  delete context[fn];
}

function myApply(context) {
  let context = context || window;
  let fn = Symbol();
  context[fn] = this;
  let args = [...arguments][1] || [];
  context[fn](...args);
  delete context[fn];
}
