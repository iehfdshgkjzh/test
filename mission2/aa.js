function checkCookie(){
    var user=document.getElementById("fname").value;
        if (user != ""){
            alert("欢迎 " + user + " 回来 ^-^");}
        else {
            user = prompt("先创建你的账号吧，在这输入名字:","");
              if (user!="" && user!=null){
                setCookie("fname",user,30);}
        }
}
function setCookie(cname,cvalue){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {var c = ca[i].trim();
     if (c.indexOf(name)==0) return c.substring(name.length,c.length);}
    return "";
}