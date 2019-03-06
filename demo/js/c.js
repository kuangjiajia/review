// // 获取所有的图片标签
// const imgs = document.getElementsByTagName('img')
// // 获取可视区域的高度
// const viewHeight = window.innerHeight || document.documentElement.clientHeight
// // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
// let num = 0
// function lazyload() {
//   for (let i = num; i < imgs.length; i++) {
//     // 用可视区域高度减去元素顶部距离可视区域顶部的高度
//     let distance = viewHeight - imgs[i].getBoundingClientRect().top
//     // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
//     if (distance >= 0) {
//       // 给元素写入真实的src，展示图片
//       imgs[i].src = imgs[i].getAttribute('data-src')
//       // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
//       num = i + 1
//     }
//   }
// }
// // 监听Scroll事件
// window.addEventListener('scroll', lazyload, false);



function lazyload() {
  const images = document.getElementsByTagName("img")
  const len = images.length
  const viewHeight = window.innerHeight
  for (let i = 0; i < len; i++) {
    const top = images[i].getBoundingClientRect().top
    if ((viewHeight - top) >= 0) {
      images[i].setAttribute("src", images[i].getAttribute("data-src"))
    }
  }
}


function throttle(fn, delay, atleast) {
  var timeout = null,
    startTime = new Date();
  return function () {
    var curTime = new Date();
    clearTimeout(timeout);
    if (curTime - startTime >= atleast) {
      fn();
      startTime = curTime;
    } else {
      timeout = setTimeout(fn, delay);
    }
  }
}

var loadImages = lazyload
loadImages();          //初始化首页的页面图片
window.addEventListener('scroll', throttle(loadImages, 500, 1000), false);