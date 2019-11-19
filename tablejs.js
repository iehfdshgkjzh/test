$("#88").click(function(){
    $.getJSON("tablejo.json", function(result){
        $.each(result, function(i, field){
            $("#monday").append("<tr>" + field + "</tr>");
        });
    });
});


/*
function page(list){
    document.getElementById('monday').outerHTML = '<td>&nbsp;</td><td colspan="2">' + list[0].one + '</td><td colspan="2">' + list[1].two + '</td><td colspan="2">' + list[2].three + '</td><td colspan="2">' + list[3].four + '</td>';
}
*/


//lst = [{"one":"综合英语（一）东九A212"}, {"two":"思想道德修养与法律基础 东九C401"}, {"three":"计算机程序设计基础（python) 东十二312"}, {"four":"微积分（二） 东九C403"}];



//var mon = JSON.parse('{"one":"综合英语（一）东九A212", "two":"思想道德修养与法律基础 东九C401", "three":"计算机程序设计基础（python) 东十二312", "four":"微积分（二） 东九C403"}');
