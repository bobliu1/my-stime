window.onload = function () {
    //login点击时显示和隐藏
    var oA = document.getElementById("loging");
    var oD = document.getElementById("login");
    var san = document.getElementById("sanjiao");
    var xia = document.getElementById("xia");
    oA.falg = 1;
   oA.onclick = function () {
            oA.falg *= -1;
            if (oA.falg === -1) {
                utils.css(oD, "display", "block")
                utils.css(san, "display", "block")
            } else {
                utils.css(oD, "display", "none")
                utils.css(san, "display", "none")
            }
    };
    //控制自助登录前面的那个图标
    xia.falg = 1;
    xia.onclick = function () {
        xia.falg *= -1;
        if (xia.falg === -1) {
            xia.style.backgroundPosition = "-28px -120px";
        } else {
            xia.style.backgroundPosition = "0 -120px";
        }

    }

    //banner
    var banner = document.getElementById("banner");
    var Oul = banner.getElementsByTagName("ul")[0];
    var oLis = Oul.getElementsByTagName("li");
    var oDian = document.getElementById("dian");
    var oI = oDian.getElementsByTagName("li");
    var btnL = banner.getElementsByTagName("a")[0];
    var btnR = banner.getElementsByTagName("a")[1];
    //自动播放
    var step = 0;
    //autoMove();
    utils.css(oLis[0], "zIndex", 1);
    move(oLis[0], "opacity", 1, 800)
    clearInterval(autoTimer);
    var autoTimer = setInterval(autoMove, 2000);

    function autoMove() {
        step++;
        step = step % oI.length;
        setBanner();
    }
    function setBanner() {
        for (i = 0; i < oLis.length; i++) {
            var curDiv = oLis[i];
            if (i === step) {
                utils.css(curDiv, "zIndex", 1);

                move(curDiv, "opacity", 1, 800,function(){
                    var oSblings=utils.siblings(this);
                    for(var j=0;j<oSblings.length;j++){
                        utils.css(oSblings[j], "opacity", 0)
                    }});

                continue
            }
            utils.css(curDiv, "zIndex", 0);
        }
        bannerTip();
    }

    //5.焦点自动播放
    function bannerTip() {
        for (var i = 0; i < oI.length; i++) {
            var curLi = oI[i];
            i == step ? utils.addClass(curLi, "bg") : utils.removeClass(curLi, "bg")
        }
    }
    //6.鼠标移入停止，移出继续
    banner.onmouseover = function () {
        clearInterval(autoTimer);
    };
    banner.onmouseout = function () {
        autoTimer = setInterval(autoMove, 2000);
    };
    //7.手动轮播
    handleChange();
    function handleChange() {
        for (var i = 0; i < oI.length; i++) {
            (function (index) {
                var curLi = oI[index];
                curLi.onclick = function () {
                    step = index;
                    setBanner();
                }
            })(i)
        }
    }

    //8.按钮左右切换
    btnR.onclick = autoMove;
    btnL.onclick = function () {
        if (step <= 0) {
            step = oLis.length;
        }
        step--;
        setBanner();
    };
    //动画库
    function move(curEle, attr, target, duration,callback) {
        duration = duration || 800;
        var time = null;
        var begin = utils.css(curEle, attr);
        var change = target - begin;
        clearInterval(curEle.timer);
        curEle.timer = setInterval(function () {
            time += 10;
            if (time < duration) {
                // curEle.style[attr] = time / duration * change + begin;
                var val = time / duration * change + begin;
                utils.css(curEle, attr, val)
            } else {
                clearInterval(curEle.timer);
                utils.css(curEle, attr, target)
                if(callback&&typeof(callback)=="function"){
                    callback.call(curEle);
                }
            }
        }, 10)
    }

    //固定定位
    var oDiv = document.getElementById('fix');
    var serach = oDiv.getElementsByTagName("div")[0];
    window.onscroll = computedDisplay;
    function computedDisplay() {
        if (utils.win('scrollTop') >= utils.win('clientHeight')) {
            oDiv.style.display = 'block';
        } else {
            oDiv.style.display = 'none';
        }
    }

    serach.onclick = function () {
        //控制header里的显示和隐藏
    };
//搜索框的List
    var OsearchL=document.getElementById("searchL");
    var Osearch_list=document.getElementById("search_list");
    var oLi=Osearch_list.getElementsByTagName("li");
    var search_input=document.getElementById("search_input");
    OsearchL.onmouseenter=function(){
        Osearch_list.style.display="block"

    };
    OsearchL.onmouseleave=function(){
        Osearch_list.style.display="none"
    };
  /*  function getvalue(){
        for(var i=0;i<oLi.length;i++){
            oLi[i].onclick=function(){
                search_input.focus();
            }
        }
    }*/
    var val=["全部","请输入电影关键字","请输入影人关键字","请输入影院关键字","按名称，电影，品牌搜索商品","请输入新闻关键字"];
    for (var i = 0; i < oLi.length; i++) {
        (function () {
            var cur= oLi[i];
                Osearch_list.style.display="none";
                search_input.focus();
            cur.vlaue=i;
            cur.onclick=function(){
                Osearch_list.style.display="none";
                search_input.value=val[cur.value];
             }
        })(i)

    }
    search_input.onfocus=function(){
        this.value=""
        this.style.color="#333"
    }
};
