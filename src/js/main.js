define(['jquery'], function ($) {
    var app = app || {};
    app.main = {
        init: function() {
            this.changeBg();
            this.customScroll();
            //this.avatarFixed();
        },
        changeBg: function () {
            setTimeout(function () {
                $('html').addClass('changeBg1');
                $('.main-part--left, .part-left-decor').addClass('changeBg2');
            }, 5000);
        },
        customScroll: function () {
            $('.scroll-wrap').jScrollPane({
                autoReinitialise: true,
                verticalGutter: 30
            });
            $('.main-part--left, .part-left-decor').css('opacity', 1);
            setTimeout(function () {
                $('.main-part--right').css('opacity', 1);
            }, 200);
        },
        avatarFixed: function () {
            var $my = $('.my'),
                $myFond = $('.my-fond'),
                myH = $my.height(),
                myW = $my.width();
            $my.css({
                position: 'fixed',
                width: myW
            });
            $myFond.css({
                width: myW,
                height: myH
            })
        }
    };



    app.init = function () {
        app.main.init();
    };



    return app;
});
















//$(function () {
//    App.init();
//});