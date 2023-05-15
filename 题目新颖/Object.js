function Person() {
  eat = function () {};
}

Person.run = function () {};
Person.prototype.walk = function () {};
let p1 = new Person("JsLiang", 24);
let p2 = new Person("JsLiang", 24);

console.log(p1.eat === p2.eat);
console.log(p1.eat, p1.run, p1.walk);
console.log(p1.run === p2.run);
console.log(p1.walk === p2.walk);
