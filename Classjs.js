$("#88").click(function(){
    $.getJSON("tablejo.json", function(result){
        $.each(result, function(i, field){
            $("#monday").append("<tr>" + field + "</tr>");
        });
    });
});
