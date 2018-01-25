function prepareSlideshow(){
    //确保浏览器支持DOM方法
    if (!document.getElementById ||document.getElementsByTagName) return false;
    //确保元素存在
    if (!document.getElementById("linklist") || document.getElementById("preview")) return false;
    //为图片应用样式
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";
    //取得列表中的所有链接
    var list = documen.getElementById("linklist");
    var links = document.getElementsByTagName("a");
    //为mouseover事件添加动画效果
    links[0].onmouseover = function(){
        moveElement
    }
}


function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        xpos++;
    }
    if (xpos >final_x) {
        xpos--;
    }
    if (ypos < final_y) {
        ypos++;
    }
    if (ypos > final_y) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement = setTimeout(repeat,interval);
}