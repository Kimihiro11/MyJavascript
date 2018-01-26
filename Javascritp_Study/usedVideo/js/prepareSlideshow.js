function prepareSlideshow(){
    //确保浏览器支持DOM方法
    if (!document.getElementById || !document.getElementsByTagName) return false;
    //确保元素存在
    if (!document.getElementById("linklist") || !document.getElementById("preview")) return false;
    //为图片应用样式
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    //preview.style.left = "0px";
    //preview.style.top = "0px";
    //取得列表中的所有链接
    var list = document.getElementById("linklist");
    var links = document.getElementsByTagName("a");
    //为mouseover事件添加动画效果
    links[0].onmouseover = function(){
        moveElement("preview",-300,0,10);
    }
    links[1].onmouseover = function(){
        moveElement("preview",-600,0,10);
    }
    links[2].onmouseover = function(){
        moveElement("preview",-900,0,10);
    }
}


function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement)
    }
    if (!elem.style.left) {
        elem.style.left ="0px";
    }
    if (!elem.style.top) {
        elem.style.top ="0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x -xpos)/10);
        xpos += dist;
    }
    if (xpos >final_x) {
        dist = Math.ceil((xpos -final_x)/10);
        xpos -= dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y -ypos)/10);
        ypos += dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos-final_y)/10);
        ypos -= dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}

addLoadEvent(prepareSlideshow);