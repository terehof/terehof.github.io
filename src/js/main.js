define(['jquery'], function ($) {
    var app = app || {};
    app.main = {
        init: function() {
            this.customScroll();
            this.avatarFixed();
        },
        customScroll: function () {
            $('.main-part--left').mCustomScrollbar({
                autoHideScrollbar: true,
                callbacks:{
                    whileScrolling: function(){
                        if (this.mcs.draggerTop > 5) {
                            $('.my').addClass('small');
                        } else {
                            $('.my').removeClass('small');
                        }
                        var newH = $('.my').height();
                        $('.my-fond').css('height', newH);
                    }
                }
            });
            $('.main-part--right').mCustomScrollbar({
                autoHideScrollbar: true
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