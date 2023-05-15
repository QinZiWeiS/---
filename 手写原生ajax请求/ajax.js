{
  let xhr = new XMLHttpRequest();

  // 第三个参数为true则表示为异步执行，并不阻塞主线程，false则阻塞
  xhr.open("GET", url, true);

  xhr.timeout = 2000;
  xhr.ontimeout = function () {
    console.log("请求超时");
  };
  xhr.onerror = function () {
    console.log("请求错误");
  };

  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status === 200) {
      console.log(this.response);
    } else {
      console.error();
    }
  };

  // 表示xhr正在发送或者正在加载中 函数
  xhr.onprogress = function (obj) {
    // obj.loaded obj.total obj.lengthComputed
    // loaded 已经加载的部分 total 所有 lenthComputed 加载进度是否可以计算
  };

  xhr.send();
}

{
  let xhr = new XMLHttpRequest();

  xhr.open("POST", url, true);

  xhr.timeout(2000);

  xhr.ontimeout = () => {
    console.log("timeout!");
  };

  xhr.onreadystatechange = function () {
    if (this.readystate !== 4) return;
    if (this.status === 200) {
      console.log(this.response);
    } else {
      console.error();
    }
  };

  xhr.onerror = function () {
    console.error("error!");
  };

  xhr.send();
}

{
  let xhr = new XMLHttpRequest();

  xhr.open("get", url, true);

  xhr.timeout(2000);

  xhr.ontimeout = () => {};

  xhr.onreadystatechange = function () {
    if (this.readystate !== 4) return;
    if ((this, status === 200)) {
    }
  };

  xhr.send();
}
