
Promise.race([new Promise((x,y) =>x("hi"))]).then(null,x=>console.log(x))