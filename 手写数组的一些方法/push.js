function myPush() {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}

function myFilter(fn) {
    if (typeof fn !== 'function') {
        throw error("type Error")
    }
    let res = []
    for (let i = 0; i < this.length; i++) {
        fn(this[i]) && res.push(this[i])
    }
    return res;
}