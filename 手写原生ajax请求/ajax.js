let xhr = new XMLHttpRequest();

// 第三个参数为true则表示为异步执行，并不阻塞主线程，false则阻塞
xhr.open("GET", url, true)

xhr.timeout = 2000
xhr.ontimeout = function () {
    console.log("请求超时")
}
xhr.onerror = function () {
    console.log("请求错误")
}

xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status === 200) {
        console.log(this.response)
    }
    else {
        console.error()
    }
}

xhr.send();