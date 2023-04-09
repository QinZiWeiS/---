function create(constructor) {
    function F() { }
    F.prototype = constructor;
    //new出来的实例对象的原型指向F.prototype，所以用传进来的构造函数去赋值给F.prototype
    return new F();
}