console.log("hi");
//var div = document.createElement('div');

//document.body.appendChild(div)

var div1 = document.createElement('div');
div1.className = 'demo';
document.body.appendChild(div1);

//e = event 事件
//鼠标点击
// document.body.onclick = function (e) {
//     console.log(e);
//     div1.style.top = e.clientY + 'px';
//     div1.style.left = e.clientX + 'px';
//     //div1.style.top = '10px';
//     //div1.style.left = '20px';
// }

// ---------------------- 鼠标按下与松开
var x = false;

var lastX
var lastY

div1.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    x = true;
}
//document.body 可用 document
// 即时没 body 也不受影响
// 解决鼠标推动太快 浏览器反应不过来的问题
document.body.onmousemove = function (e) {
    //console.log(e);

    if (x === true) {

        console.log(lastY, lastY)
        console.log(e.clientX, e.clientY)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY

        console.log('div.style.top')

        //只能获取 页面 style 定的 css，不能获取 css 页面内的样式
        console.log(div1.style.top)
        var top = parseInt(div1.style.top) || 0;
        var left = parseInt(div1.style.left) || 0;

        //---------- 解决推拽超出 页面
        var resultX = top + deltaY
        var resultY = left + deltaX
        if (resultY < 0) {
            resultY = 0;
        }
        if (resultX < 0) {
            resultX = 0;
        }
        // -----------------

        //div1.style.top = resultY + 'px';
        //div1.style.left = resultX + 'px';
        div1.style.top = top + deltaY + 'px';
        div1.style.left = left + deltaX + 'px';


        //刷新 lastX lastY
        lastX = e.clientX;
        lastY = e.clientY;
        //div1.style.top = e.clientY + 'px';
        //div1.style.left = e.clientX + 'px';
    }


    //div1.style.top = '10px';
    //div1.style.left = '20px';
}

div1.onmouseup = function () {
    x = false;
}
