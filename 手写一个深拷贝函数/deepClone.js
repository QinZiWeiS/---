function deepClone(obj) {
  if (typeof obj !== "object") return;

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }

  return newObj;
}

function deepClone(obj) {
  if (typeof obj !== "object") {
    console.error("请传入引用数据类型！");
    return;
  }

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
}

function deepClone(obj) {
  if (typeof obj !== "object") return;

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj[key] === obj) return;
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
}

// 写一个深拷贝函数
function deepClone(obj) {
  if (typeof obj !== "object") return;

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj[key] === obj) return;
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }

  return newObj;
}

let obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
};

let newObj = deepClone(obj);
console.log(deepClone(obj));
