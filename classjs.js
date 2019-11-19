lst1 = ["#mon1", "#mon2", "#mon3", "#mon4"];
lst2 = ["#tue1", "#tue2", "#tue3", "#tue4"];
lst3 = ["#wed1", "#wed2", "#wed3", "#wed4"];
lst4 = ["#thu1", "#thu2", "#thu3", "#thu4"];
lst5 = ["#fri1", "#fri2", "#fri3", "#fri4"];

$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("classjo.json", function(date){
            for (i = 0; i < 4; i++){
                $(lst1[i]).html(date.mon[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst2[i]).html(date.tue[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst3[i]).html(date.wed[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst4[i]).html(date.thu[i].name);
            };
            for (i = 0; i < 4; i++){
                $(lst5[i]).html(date.fri[i].name);
            };
        });
    });
});


