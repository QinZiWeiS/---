function loadImg(url) {
  return new Promise((reslove, reject) => {
    const img = new Image();
    img.onload = function () {
      reslove(img);
    };
    img.onerror = function () {
      reject(new Error("Could not load image at" + url));
    };
    img.src = url;
  });
}

function imgLoad(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = function () {
      reject();
    };
    img.src = url;
  });
}
