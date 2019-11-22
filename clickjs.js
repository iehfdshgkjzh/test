
document.onclick = function click(){
    var node = document.getElementsByTagName("body")[0];
    var di = document.createElement("div");
    var e = event || window.event;
    di.style.position = "absolute";
    var x = e.clientX;
    var y = e.clientY
    di.style.left = x;
    di.style.top = y;
    var im = document.createElement("img");
    alert(x+","+y);
    im.src = "pic1.jpg";
    im.id = "picture";
    di.appendChild(im);
    node.appendChild(di);
    setTimeout(function(){di.style.display='none';}, 7000);
}




/*
$("body").click(function(){
    var x = $(this).offset().left;
    var y = $(this).offset().top;
    new node = document.getElementById("99");
    new di = document.createElement("div");
    di.style.position = "absolute";
    di.style.left = x;
    di.style.top = y;
    new im = document.createElement("img");
    im.src = "pic1.jpg";
    im.id = "clickimg";
    di.appendChild(im);
    node.appendChild(di);
});
*/