function myTypeof(value) {
    if (value === null) {
        return value + "";
    }
    // 判断数据是引用类型的情况
    if (typeof value === "object") {
        // valueClass -> "[object Object]" 通过字符串和数组方法得到object
        let valueClass = Object.prototype.toString.call(value),
            type = valueClass.split(" ")[1].split("");
        console.log(valueClass, type)
        type.pop();
        return type.join("").toLowerCase();
    } else {
        // 判断数据是基本数据类型的情况和函数的情况
        return typeof value;
    }
}

function myType(value) {
    if (value === null) return value.toString();

    if (typeof value === "object") {
        let valueStr = Object.prototype.toString.call(value);
        let res = valueStr.split(' ')[1].split('');
        res.pop();
        return res.join('').toLowerCase()
    }
    else {
        return typeof value;
    }
}