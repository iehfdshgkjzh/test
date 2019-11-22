lst = ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png"];

document.onclick = function click(){
    var mun = Math.random();
    mun = parseInt(mun*10)%5;
    for (i=0; i<5; i++){
        if (mun == i){
            pict = lst[i];
        };
    };
    var node = document.getElementsByTagName("body")[0];
    var di = document.createElement("div");
    var e = event || window.event;
    di.style.position = "absolute";
    di.style.left = e.clientX+'px';
    di.style.top = e.clientY+'px';
    var im = document.createElement("img");
    im.src = pict;
    im.id = "picture";
    di.appendChild(im);
    node.appendChild(di);
    setTimeout(function(){node.removeChild(di)}, 6998);
};

