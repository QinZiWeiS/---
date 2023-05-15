Function.prototype.MyBind = function (context) {
  context = context || window;
  let arg = [...arguments].slice(1);
  return function () {
    let innerArg = [...arguments];
    return this.apply(context, arg.concat(innerArg));
  };
};

Function.prototype.MyBind = function (context) {
  let context = context || window;
  let arg = [...arguments].slice(1);
  return function () {
    let innerArg = [...arguments];
    return this.apply(context, arg.concat(innerArg));
  };
};

Function.prototype.myBind = function (context) {
  let context = context || window;
  let args = [...arguments].slice(1);
  return function () {
    let innerArg = [...arguments];
    return this.apply(context, args.concat(innerArg));
  };
};

let Person = {
  name: "Tom",
  say(age) {
    console.log(this);
    console.log(`我叫${this.name}我今年${age}`);
  },
};

Person1 = {
  name: "Tom1",
  age: 18,
};

let fn = Person.say.bind(Person1);
fn();
fn(18);

function myBind(context) {
  let context = context || window;
  let args = [...arguments].slice(1);

  return function () {
    let innerArgs = [...arguments];

    return this.apply(context, args.concat(innerArgs));
  };
}

function myBind(context) {
  let context = context || window;
  let args = [...arguments].slice(1);
  return function () {
    let innerArg = [...arguments];
    return this.apply(context, args.concat(innerArg));
  };
}

function myBind(context) {
  let context = context || window;
  let args = [...arguments].slice(1);
  return function () {
    let innerArgs = [...arguments];
    return this.apply(context, args.concat(innerArgs));
  };
}

function myBind(context) {
  let context = context || window;
  let args = [...arguments].slice(1);
  return function () {
    let innerArgs = [...arguments];
    return this.apply(context, args.concat(innerArgs));
  };
}
