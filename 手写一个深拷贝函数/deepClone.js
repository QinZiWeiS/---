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
        typeof obj[key] === "object" ? deepClone(newObj[key]) : obj[key];
    }
  }
}
