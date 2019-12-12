var day = new Array();
day[0] = ["#mon1", "#mon2", "#mon3", "#mon4"];
day[1] = ["#tue1", "#tue2", "#tue3", "#tue4"];
day[2] = ["#wed1", "#wed2", "#wed3", "#wed4"];
day[3] = ["#thu1", "#thu2", "#thu3", "#thu4"];
day[4] = ["#fri1", "#fri2", "#fri3", "#fri4"];


$(document).ready(function(){
    $("#1").click(function(){
        $.getJSON("classjo.json", function(date){
            for (t = 0; t < 5; t++){
                for (i = 0; i < 4; i++){
                    $(day[t][i]).html(date.yaoxue1[t].day[i].name);
                };
            };
            if (document.getElementById("week").options[5].selected == true){
                $(day[2][0]).html(date.yaoxue1[5].addition[0].name);
                $(day[4][1]).html(date.yaoxue1[5].addition[1].name);
            };
        });
    });
});
$(document).ready(function(){
    $("#2").click(function(){
        $.getJSON("classjo.json", function(date){
            for (t = 0; t < 5; t++){
                for (i = 0; i < 4; i++){
                    $(day[t][i]).html(date.yaoji[t].day[i].name);
                };
            };
        });
    });
});
$(document).ready(function(){
    $("#3").click(function(){
        $.getJSON("classjo.json", function(date){
            for (t = 0; t < 5; t++){
                for (i = 0; i < 4; i++){
                    $(day[t][i]).html(date.yaoshi[t].day[i].name);
                };
            };
        });
    });
});
