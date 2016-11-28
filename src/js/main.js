jQuery(function () {
    var no = 0;
    var resultFinal = 0;
    $("#length").bind("input propertychange",function () {
        var length = Number($("#length").val());
        var width = Number($("#width").val());
        var height = Number($("#height").val());
        var minusArea = Number($("#minusArea").val());
        if (length<0){
            alert("输入不得为负数");
            $("#length").val(0);
            return;
        }
        // reload(length,width,height);
    });
    $("#width").bind("input propertychange",function () {
        var length = Number($("#length").val());
        var width = Number($("#width").val());
        var height = Number($("#height").val());
        var minusArea = Number($("#minusArea").val());
        if (width<0){
            alert("输入不得为负数");
            $("#width").val(0);
            return;
        }
        // reload(length,width,height);
    });
    $("#height").bind("input propertychange",function () {
        var length = Number($("#length").val());
        var width = Number($("#width").val());
        var height = Number($("#height").val());
        var minusArea = Number($("#minusArea").val());
        if (height<0){
            alert("输入不得为负数");
            $("#height").val(0);
            return;
        }
        // reload(length,width,height);
    });
    $("#minusLength").bind("input propertychange",function () {
        var minusLength = Number($("#minusLength").val());
        var minusWidth = Number($("#minusWidth").val());
        var minusArea = minusLength * minusWidth;
        if (minusLength<0){
            alert("输入不得为负数");
            $("#minusLength").val(0);
            return;
        }
        $("#minusArea").val(minusArea);
    });
    $("#minusWidth").bind("input propertychange",function () {
        var minusLength = Number($("#minusLength").val());
        var minusWidth = Number($("#minusWidth").val());
        var minusArea = minusLength * minusWidth;
        if (minusWidth<0){
            alert("输入不得为负数");
            $("#minusWidth").val(0);
            return;
        }
        $("#minusArea").val(minusArea);
    });

    $("#minus").click(function () {
        var length = Number($("#length").val());
        var width = Number($("#width").val());
        var height = Number($("#height").val());
        reload(length,width,height);
        var result = Number($("#result").text());
        var minusArea = Number($("#minusArea").val());
        if (minusArea > 0) {
            var newResult = result - minusArea;
            log(result+" - "+minusArea +" = "+newResult);
            $("#result").text(newResult);
        }
    });


    $("#plus").click(function () {
        var length = Number($("#length").val());
        var width = Number($("#width").val());
        var height = Number($("#height").val());
        reload(length,width,height);
        var result = Number($("#result").text());
        var minusArea = Number($("#minusArea").val());
        if (minusArea >0 ) {
            var newResult = result + minusArea;
            log(result+" + "+minusArea +" = "+newResult);
            $("#result").text(newResult);
        }
    });


    function reload(length,width,height) {
        var result = (length + width)*2*height + length * width;
        var temp = resultFinal;
        if (temp!=result) {
            $("#result").text(result);
            if (length!=0&&width!=0&&height!=0) {
                // log("长："+length+"\t宽："+width+"\t高："+height);
                log("("+length+" + "+width+")*2* "+height+" + "+length+" * "+ width +" = " +result);
                resultFinal = result;
            }
        }
    }

    function log(text) {
        // var log = $("#log").text();
        // log = ++no+"："+text+"<br>" + log;
        // $("#log").text(log)
        $("#log").prepend(++no+"："+text+"<br>");
        // $("#log").append(++no+"："+text+"<br>");
    }
});
