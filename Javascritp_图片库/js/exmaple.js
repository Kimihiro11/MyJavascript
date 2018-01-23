window.onload = function(){
    var testdiv = document.getElementById("testdiv");
    //alert(testdiv.innerHTML);
    testdiv.innerHTML = " <p>This is <em>my</em> content.</p>";
    var para =document.createElement('p');
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello World");
    para.appendChild(txt); 
}