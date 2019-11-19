lst1 = ["#mon1", "#mon2", "#mon3", "#mon4"];
lst2 = ["#tue1", "#tue2", "#tue3", "#tue4"];
lst3 = ["#wed1", "#wed2", "#wed3", "#wed4"];
lst4 = ["#thu1", "#thu2", "#thu3", "#thu4"];
lst5 = ["#fri1", "#fri2", "#fri3", "#fri4"];

$(document).ready(function(){
    $("#1").click(function(){
        $.getJSON("classjo.json", function(date){
            for (i = 0; i < 4; i++){
                $(lst1[i]).html(date.yaoxue1.mon[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst2[i]).html(date.yaoxue1.tue[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst3[i]).html(date.yaoxue1.wed[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst4[i]).html(date.yaoxue1.thu[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst5[i]).html(date.yaoxue1.fri[i].name);
            };
        });
    });
});

$(document).ready(function(){
    $("#2").click(function(){
        $.getJSON("classjo.json", function(date){
            for (i = 0; i < 4; i++){
                $(lst1[i]).html(date.yaoji.mon[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst2[i]).html(date.yaoji.tue[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst3[i]).html(date.yaoji.wed[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst4[i]).html(date.yaoji.thu[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst5[i]).html(date.yaoji.fri[i].name);
            };
        });
    });
});

$(document).ready(function(){
    $("#3").click(function(){
        $.getJSON("classjo.json", function(date){
            for (i = 0; i < 4; i++){
                $(lst1[i]).html(date.yaoshi.mon[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst2[i]).html(date.yaoshi.tue[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst3[i]).html(date.yaoshi.wed[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst4[i]).html(date.yaoshi.thu[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst5[i]).html(date.yaoshi.fri[i].name);
            };
        });
    });
});