//验证码
window.onload = function () {
    //验证码
    var yanZheng = document.getElementById("yanZheng");
    yanzhengma();
    function yanzhengma() {
        var ary = 'abcdefghijklmnopqrstwvuxizABCDEFGHIJKLMNOPQRSTUVWXIZ0123456789';
        var str = "";
        for (var i = 0; i < 4; i++) {
            var index = Math.round(Math.random() * 62);
            str += ary.charAt(index);
        }
        yanZheng.innerHTML = str

    }

    var rest_btn = document.getElementById("rest_btn");
    rest_btn.onclick = function () {
        yanzhengma();
    };
//选项卡
    var phone = document.getElementById("phone");
    var phone_list = document.getElementById("phone_list");
    var mail = document.getElementById("mail");
    var mail_list = document.getElementById("mail_list");
    phone.onclick = function () {
        utils.css(phone_list, "display", "block");
        utils.addClass(phone, "bg");
        utils.removeClass(mail, "bg");
        utils.css(mail_list, "display", "none")
    };
    mail.onclick = function () {
        utils.addClass(mail, "bg");
        utils.removeClass(phone, "bg");
        utils.css(mail_list, "display", "block");
        utils.css(phone_list, "display", "none");
    };

//实现点击IPPUT的时候，value是“”，如果正则不匹配他的下一个为P的元素的Color设为Red
    var content = document.getElementById("content");
    var inputs = content.getElementsByTagName("input");
    var phone_accounts = /^1\d{10}$/;//手机号
    var mail_accounts = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;//邮箱
    var regpassword = /(([0-9]|[a-z]|[A-Z]){6,20})/;//密码
    //性别的切换
    var sex_M = document.getElementById("sex_M");
    var sex_W = document.getElementById("sex_W");
    //是否同意协议的
    var xieYi_i = document.getElementById("xieYi_i");
    //把第一个input的value存储起来
    var aryValue = [];
    for (var k = 0; k < inputs.length; k++) {
        aryValue.push(inputs[k].value)
    }
    //获取的是input的元素
    var phone_a= document.getElementById("0");
    var phone_pass= document.getElementById("1");
    var phone_que= document.getElementById("2");
    var mail_a= document.getElementById("3");
    var mail_pass= document.getElementById("4");
    var mail_que= document.getElementById("5");
    var yanzhengma_que= document.getElementById("6");

    content.onclick = function (e) {

        e = e || window.event;
        e.target = e.target || e.srcElement;
        ////INPUt
        if (e.target.tagName == "INPUT") {
            //u判断是否清空INPUT的value
            for (i = 0; i < aryValue.length; i++) {
                if (e.target.value === aryValue[i]) {
                   e.target.value = "";
                }
            }
            /*phone_a手机帐号*/
            phone_a.onblur = function () {
                console.log(!phone_accounts.test(this.value))
                if (!phone_accounts.test(this.value)||this.value === "") {
                    var ary= utils.nextAll(this);
                    console.log(this)
                    console.log(ary)

                    for (var i = 0; i < ary.length; i++) {
                        if (ary[i].tagName == "P") {
                            ary[i].style.color = "red";
                            break;
                        }
                    }
                }
            };
            phone_a.onfocus =function () {
                if (!phone_accounts.test(this.value)) {
                    this.value = "";
                }
                var ary = utils.nextAll(this);
                for (var i = 0; i < ary.length; i++) {
                    if (ary[i].tagName == "P") {
                        ary[i].style.color = "#333";
                        break;
                    }
                }
            };
            /*phone_pass手机密码*/
            phone_pass.onblur = function() {
                console.log(!phone_accounts.test(this.value))
                if (!regpassword.test(this.value)||this.value === "") {
                    var ary= utils.nextAll(this);
                    console.log(this)
                    console.log(ary)

                    for (var i = 0; i < ary.length; i++) {
                        if (ary[i].tagName == "P") {
                            ary[i].style.color = "red";
                            break;
                        }
                    }
                }
            };
            phone_pass.onfocus =function() {
                if (!regpassword.test(this.value)) {
                    this.value = "";
                }
                var ary = utils.nextAll(this);
                for (var i = 0; i < ary.length; i++) {
                    if (ary[i].tagName == "P") {
                        ary[i].style.color = "#333";
                        break;
                    }
                }
            };
           /* phone_que判断他和他上一个哥元素是INPut的value是否相等*/
            phone_que.onblur = function() {
                if (this.value !==phone_pass.value) {
                    var ary= utils.nextAll(this);
                    console.log(ary)
                    for (var i = 0; i < ary.length; i++) {
                        if (ary[i].tagName == "P") {
                            ary[i].style.color = "red";
                            break;
                        }
                    }
                }
            };
            phone_que.onfocus =function() {
                var ary = utils.nextAll(this);
                for (var i = 0; i < ary.length; i++) {
                    if (ary[i].tagName == "P") {
                        ary[i].style.color = "#333";
                        break;
                    }
                }
            };

            /* mail_a邮箱帐号*/
            mail_a.onblur = function () {
                console.log(!mail_accounts.test(this.value))
                if (!mail_accounts.test(this.value)||this.value === "") {
                    var ary= utils.nextAll(this);
                    console.log(this)
                    console.log(ary)

                    for (var i = 0; i < ary.length; i++) {
                        if (ary[i].tagName == "P") {
                            ary[i].style.color = "red";
                            break;
                        }
                    }
                }
            };
            mail_a.onfocus =function () {
                if (!mail_accounts.test(this.value)) {
                    this.value = "";
                }
                var ary = utils.nextAll(this);
                for (var i = 0; i < ary.length; i++) {
                    if (ary[i].tagName == "P") {
                        ary[i].style.color = "#333";
                        break;
                    }
                }
            };
            /*mail_pass邮箱密码*/
            mail_pass.onblur = function() {
                console.log(!phone_accounts.test(this.value))
                if (!regpassword.test(this.value)||this.value === "") {
                    var ary= utils.nextAll(this);
                    console.log(this)
                    console.log(ary)

                    for (var i = 0; i < ary.length; i++) {
                        if (ary[i].tagName == "P") {
                            ary[i].style.color = "red";
                            break;
                        }
                    }
                }
            };
            mail_pass.onfocus =function() {
                if (!regpassword.test(this.value)) {
                    this.value = "";
                }
                var ary = utils.nextAll(this);
                for (var i = 0; i < ary.length; i++) {
                    if (ary[i].tagName == "P") {
                        ary[i].style.color = "#333";
                        break;
                    }
                }
            };
            /*mail_que确认密码*/
            mail_que.onblur = function() {
                if (this.value !==phone_pass.value) {
                    var ary= utils.nextAll(this);
                    console.log(ary)
                    for (var i = 0; i < ary.length; i++) {
                        if (ary[i].tagName == "P") {
                            ary[i].style.color = "red";
                            break;
                        }
                    }
                }
            };
            mail_que.onfocus =function() {
                var ary = utils.nextAll(this);
                for (var i = 0; i < ary.length; i++) {
                    if (ary[i].tagName == "P") {
                        ary[i].style.color = "#333";
                        break;
                    }
                }
            };
            /*yanzhengma_que 确证邮箱的验证码*/
            yanzhengma_que .onblur = function() {
                if (this.value !==yanZheng.innerHTML) {
                    var ary= utils.nextAll(this);
                    console.log(ary)
                    for (var i = 0; i < ary.length; i++) {
                        if (ary[i].tagName == "P") {
                            ary[i].style.color = "red";
                            break;
                        }
                    }
                }
            };
            yanzhengma_que .onfocus =function() {
                var ary = utils.nextAll(this);
                for (var i = 0; i < ary.length; i++) {
                    if (ary[i].tagName == "P") {
                        ary[i].style.color = "#333";
                        break;
                    }
                }
            };
          /*  e.target.onblur = function () {
                if (!phone_accounts.test(e.target.value) || e.target.value === "") {
                    var ary = utils.nextAll(this);
                    for (var i = 0; i < ary.length; i++) {
                        if (ary[i].tagName == "P") {
                            ary[i].style.color = "red";
                            break;
                        }
                    }
                }
            };
            e.target.onfocus = function () {
                if (!phone_accounts.test(e.target.value)) {
                    this.value = "";
                }
                var ary = utils.nextAll(this);
                for (var i = 0; i < ary.length; i++) {
                    if (ary[i].tagName == "P") {
                        ary[i].style.color = "#333";
                        break;
                    }
                }
            };*/


        }
        //sex
        if (e.target.id === "sex_M") {
            utils.addClass(sex_M, "sex_bg");
            utils.removeClass(sex_W, "sex_bg");
        }
        if (e.target.id === "sex_W") {
            utils.addClass(sex_W, "sex_bg");
            utils.removeClass(sex_M, "sex_bg");
        }
        //是否同意协议
        if (e.target.id === "xieYi_i") {
            console.log(e.target)
            if (!utils.hasClass(xieYi_i, "i_bg")) {
                utils.addClass(xieYi_i, "i_bg")
            } else {
                utils.removeClass(xieYi_i, "i_bg")
            }
        }
        //下次自助登录
        var login_M_i = document.getElementById("login_M_i");
        login_M_i.onclick = function () {
            if (!utils.hasClass(login_M_i, "login_M_i")) {
                utils.addClass(login_M_i, "login_M_i")
            } else {
                utils.removeClass(login_M_i, "login_M_i")
            }
        }
    };
    /*var phone_a= document.getElementById("0");
    phone_a.onblur = function () {
        if (!phone_accounts.test(this.value) ||this.value === "") {
            var ary = utils.nextAll(this);
            for (var i = 0; i < ary.length; i++) {
                if (ary[i].tagName == "P") {
                    ary[i].style.color = "red";
                    break;
                }
            }
        }
    };
    phone_a.onfocus = function () {
        if (!phone_accounts.test(this.value)) {
            this.value = "";
        }
        var ary = utils.nextAll(this);
        for (var i = 0; i < ary.length; i++) {
            if (ary[i].tagName == "P") {
                ary[i].style.color = "#333";
                break;
            }
        }
    };*/
    //当点击的时候登录框获得焦点
    var loging=document.getElementById("loging"),
         input_Login=document.getElementById("input_Login");
    loging.onclick=function(){
        input_Login.focus();
        input_Login.value=""
    }
}
