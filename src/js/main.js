define(['jquery'], function ($) {
    var app = app || {};
    app.main = {
        init: function() {
            this.customScroll();
            //this.avatarFixed();
        },
        customScroll: function () {

            $('.scroll-wrap').jScrollPane({
                autoReinitialise: true,
                verticalGutter: 30
            });
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