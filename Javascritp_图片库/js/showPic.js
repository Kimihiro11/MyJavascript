function showPic(whichpic){
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

/*function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length) //childNodes 用来获取一个元素的所有子元素
    alert(body_element.nodeType);//nodeType 中有价值的 元素节点[1]、属性节点[2]、文本节点[3]
}*/
/*window.onload = function (){
    prepareGallery();
}*/


function prepareGallery(){
    if(!document.getElementsByName)return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery  = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick =function(){
           return showPic(this) ? false : true;
        }

    }
   // alert(typeof window.onload)
}

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);