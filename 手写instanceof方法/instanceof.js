function myinstanceof(left, right) {
    //不断判断左边对象的原型链上有没有出现右边构造函数的原型对象
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while (1) {
        if (!proto) return false;
        if (proto === prototype) return true;

        proto = Object.getPrototypeOf(proto);
    }
}