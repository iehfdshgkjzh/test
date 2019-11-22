var a, b;
function prom(){
   var answer = prompt();
   if(answer == "葛军出征 寸草不生")
       {alert("恭喜啦，你通关了！");}
   else
        if(answer == "8")
            {alert("当当当~ 你被分配到1号新手村。");
            a = "不过后面的问题还没有准备好，你现在被困在这里了。";
            document.getElementById("aa").outerHTML=a;}
        else
            {alert("哦呵，你进入了2号新手村。");
             a = "你一个人走在树林里。前面有个岔路，你选择往哪边走？";
             document.getElementById("aa").outerHTML=a;
             document.getElementById("AA21").style.display="block";
             document.getElementById("AA22").style.display="block";}
}
function ale(){
   alert("这么简单的题你都不做，那你只好去3号新手村了。");
   a = "两个月亮（打一个字）";
   document.getElementById("aa").outerHTML=a;
   document.getElementById("AA3").style.display="block";
}
function AA3function(){
   var AA3answer = prompt();
   if(AA3answer == "朋")
       {alert("对啦~");
       b3 = "有一张桌子，它的下面刚刚好可以让一辆车通过（打一个字）";
       document.getElementById("bb").outerHTML=b3;
       document.getElementById("BB3").style.display="block";}
   else
      {alert("你很不幸地被小恶魔杀死了")}
}
function BB3function(){
    var BB3answer = prompt();
    if(BB3answer == "库")
        {alert("你又对啦~ 再答一道题就可以通关了哦");
        c = "家里有两个人（打一个字）"
        document.getElementById("cc").outerHTML=c;
        document.getElementById("CC3").style.display="block";}
    else
       {alert("你很不幸地被小恶魔杀死了")}
}
function questionAA21(){
    b21 = "走了一会儿，天黑了下来，前面的路看起来有些荒凉。这时你";
    document.getElementById("bb").outerHTML=b21;
    document.getElementById("BB21").style.display="block";
    document.getElementById("BB22").style.display="block";
}
function questionAA22(){
     b22 = "走了一会儿，你看到了一座桥，桥旁边有一个被刀刺穿的面具，地上散落着一些冥币。这时你";
     document.getElementById("bb").outerHTML=b22;
     document.getElementById("BB2b1").style.display="block";
     document.getElementById("BB2b2").style.display="block";
     document.getElementById("BB2b3").style.display="block";
     document.getElementById("BB2b4").style.display="block";
}
function result1(){
    alert("突然，无尽黑暗笼罩住你，你失去了意识。");
}
function questionBB2b(){
    c2 = "你走进了一个村庄。前面隐约有光，你发现那是从一个屋子里透出来的。屋子里摆了十二支蜡烛。地上又有几张冥币。这时你";
    document.getElementById("cc").outerHTML=c2;
    document.getElementById("CC31").style.display="block";
    document.getElementById("CC32").style.display="block";
    document.getElementById("CC33").style.display="block";
}
function questionCC2(){
    d2 = "你发现这个村庄很小，周围却全是坟地。你很害怕，想快点离开。但是没有别的路了，你只好从坟地间走过去。穿过坟地，你走到了一条石阶前。石阶依山而建，尽头似乎有座寺庙。这时你";
    document.getElementById("dd").outerHTML=d2;
    document.getElementById("DD31").style.display="block";
    document.getElementById("DD32").style.display="block";
    document.getElementById("DD33").style.display="block";
}
function result2(){
    alert("Game over");
}
function result3(){
    d2d = "不知什么时候天已经完全黑了。你往回走了一会儿，旁边的坟墓里突然传出“笃~笃~的声音，越来越多的坟墓里都传出了这种声响。你吓得跑回了石阶。";
    document.getElementById("ee").outerHTML=d2d;
}