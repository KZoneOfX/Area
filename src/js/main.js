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
            newResult = newResult.toFixed(2);
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
            newResult = newResult.toFixed(2);
            log(result+" + "+minusArea +" = "+newResult);
            $("#result").text(newResult);
        }
    });



    function reload(length,width,height) {
        var result = (length + width)*2*height + length * width;
        var temp = resultFinal;
        if (temp!=result) {
            result = result.toFixed(2);
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


    $("#logTitle").click(function () {
        if (copyToClipboard('log')){
            alert("已将计算过程复制到粘贴板");
        }
    });

    function copyToClipboard(elementId) {
        // 创建元素用于复制
        var aux = document.createElement("input");

        // 获取复制内容
        var content = document.getElementById(elementId).innerHTML || document.getElementById(elementId).value;

        if (content == undefined || content == 'undefined' ||content.length==0) {
            return false;
        }
        content = content.replace("<br>","\n");
        // 设置元素内容
        aux.setAttribute("value", content);

        // 将元素插入页面进行调用
        document.body.appendChild(aux);

        // 复制内容
        aux.select();

        // 将内容复制到剪贴板
        document.execCommand("copy");

        // 删除创建元素
        document.body.removeChild(aux);

        return true;
    }
});
