function loadImg(url) {
    return new Promise((reslove, reject) => {
        const img = new Image();
        img.onload = function () {
            reslove(img)
        }
        img.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };
        img.src = url
    })
}