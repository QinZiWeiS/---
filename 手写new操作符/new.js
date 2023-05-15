function myNew() {
  //取参数的第一项，即构造函数
  let constructor = Array.prototype.shift.call(arguments);
  //通过构造函数的原型对象创建一个新对象
  let newObj = Object.create(constructor.prototype);
  //构造函数的this指向newObj 并返回一个结果对象
  let res = constructor.apply(newObj, arguments);
  return res && (typeof res === "object" || typeof res === "function")
    ? res
    : newObj;
}

function Person() {
  this.name = "123";
  return {
    name: "123123",
  };
}

function new1() {
  const constructor = [].shift.call(arguments);
  if (typeof constructor !== "function") {
    throw error("type error!");
  }
  let obj = Object.create(constructor.prototype);
  let res = constructor.apply(obj, arguments);
  return res instanceof Object ? res : obj;
}

function new2() {
  let constructor = [...arguments].shift();
  let obj = Object.create(constructor);
  let res = constructor.apply(obj, [...arguments]);
  return res instanceof Object ? res : obj;
}

let p1 = new2(Person);
console.log(p1.name);

function myNew() {
  let constructor = Array.prototype.shift().call(arguments);
  if (typeof constructor !== "function") {
    console.error("type error!");
  }
  let args = [...arguments];
  let obj = Object.create(constructor);
  //   obj去调用constructor方法，如果返回一个对象，那最终结果应该是这个对象
  let res = constructor.apply(obj, args);

  return typeof res === "object" ? res : obj;
}

function mynew() {
  let constructor = Array.prototype.shift().call(arguments);
  if (typeof constructor !== "function") return;
  let args = [...arguments];

  let newObj = Object.create(constructor);

  let res = constructor.apply(newObj, args);

  return typeof res === "object" ? res : newObj;
}

function Mynew() {
  let constructor = Array.prototype.shift().call(arguments);
  if (typeof constructor !== "function") return;

  let obj = Object.create(constructor);

  let args = [...arguments];

  let res = constructor.apply(obj, args);

  return typeof res === "object" ? res : obj;
}
