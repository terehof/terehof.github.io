define(['jquery'], function ($) {
    var app = app || {};
    app.main = {
        init: function() {
            this.customScroll();
            //this.avatarFixed();
        },
        customScroll: function () {
            $('.main-part--left').jScrollPane({
                autoReinitialise: true
            });
            $('.main-part--right').jScrollPane({
                autoReinitialise: true
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