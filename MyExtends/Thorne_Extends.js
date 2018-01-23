//页面加载完毕时执行函数
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }
    else{
        window.onload =function(){
            oldonload();
            func();
        }
    }
}
//把一个元素节点插到另一个元素节点之后
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement,nextSibling);
    }
}