$(function() {
    $('a.scroll[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

$(document).ready(function () {
    var navbar = $('.navbar');
    var navHeight = navbar.height();
    var pagenumarr = location.pathname.split("?")[0].split("/");
    var pagenum = pagenumarr[pagenumarr.length-1];
    //console.log(pagenum);
    function pagelink_fn() {
        if (pagenum==""){
            $("ul.navbar-nav li").eq(0).addClass("activecolor");
        }else{
            $("ul.navbar-nav li").each(function(){
                var a_href = $(this).find('a').attr('href');
                if(a_href==pagenum){
                    $(this).addClass("activecolor");
                }
            });
        }
        $('.commonalert').fadeOut(0);
        $('.popalert').click(function() {
            $('.commonalert').fadeIn();
        });
        $('.alertclose').click(function() {
            $('.commonalert').fadeOut();
        });
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= navHeight) {
            navbar.addClass('navbar-color'), function() {};
        } else {
            navbar.removeClass('navbar-color');
        }
    });
    var agent = navigator.userAgent.toLowerCase();
    if (agent.match("android") || agent.match("iphone") || agent.match("ipad")) { } else {
        nice = $("html").niceScroll({ scrollspeed: 51, mousescrollstep: 45, cursorwidth: "5px", cursorcolor: "#222", cursorborder: "0px solid #fff" });
    };
    $('.navbar').load('common.html .container', function() {
        pagelink_fn();
    });
    $('footer').load('common.html footer');
    //$('#alertbox .alertcontent').load('common.html .alertcontent');
});

$(document).ready(function() {
    totopfade();
    function totopfade(){
        if ($(this).scrollTop() > 100) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    }
    $(window).scroll(function() {
        totopfade();
    });

    $('.toTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
$('.navbar').removeClass('wow');
var wow = new WOW({live:true});
new WOW().init();

function addCookie(sName,sValue,day) {
    var expireDate = null;
    if(day){
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate()+day);
    }
    document.cookie = sName + "=" +escape(sValue) + ((expireDate == null) ?
            "" : ";expires=" + expireDate.toGMTString())+";path=/";
}

function getCookies(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
    }
    return null;
} 