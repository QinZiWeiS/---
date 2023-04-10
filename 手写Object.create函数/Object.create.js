function Person() {
  this.name = "123";
  return {
    name: "123123",
  };
}

Object.prototype.create = function (constructor) {
  function F() {}
  F.prototype = constructor;
  //new出来的实例对象的原型指向F.prototype，所以用传进来的构造函数去赋值给F.prototype
  return new F();
};
let p1 = Object.create(Person());
console.log(p1.name);
