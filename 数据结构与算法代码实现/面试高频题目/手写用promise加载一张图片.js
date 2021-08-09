function loadImg(src) {
    const p = new Promise ((resolve, reject) => {
      const img = document.createElement('img')
      img.onload = () => {
          resolve(img)
      }
      img.onerror = () => {
          const err = new Error('图片加载失败 ${src}')
          reject(err)
      }
      img.src = src
    })
    return p
}

const url1 = 'https://image1.suning.cn/uimg/cms/img/159642507148437980.png'
const url2 = 'https://image3.suning.cn/uimg/cms/img/162458853325385417.gif'

loadImg(url1).then(img1 => {
    console.log(img1.width);
    return img1 //普通对象
}).then(img1 => {
    console.log(img1.height);
    return loadImg(url2) // promise 实例
}).then(img2 => {
    console.log(img2.width);
    return img2
}).then(img2 => {
    console.log(img2.height);
}).catch(er => console.error(er))