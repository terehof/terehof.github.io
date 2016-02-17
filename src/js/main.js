define(['jquery'], function ($) {
    var app = app || {};
    app.main = {
        init: function() {
            this.changeBg();
            this.greetingsPopup();
            this.customScroll();
            //this.avatarFixed();
        },
        changeBg: function () {
            setTimeout(function () {
                $('body').addClass('changeBg1');
                $('.main-part--left, .part-left-decor').addClass('changeBg2');
            }, 15000);
        },
        greetingsPopup: function () {
            if (!$.cookie('greetPopup')) {
                $.cookie('greetPopup', true);
                var hoursNow = new Date();
                hoursNow = hoursNow.getHours();
                var greetText = 'Good morning!';

                if (hoursNow < 12) {
                    greetText = 'Good morning!';
                } else if (hoursNow < 17) {
                    greetText = 'Good afternoon!';
                } else if (hoursNow < 24) {
                    greetText = 'Good evening!';
                }
                $('.jsGreetText').html(greetText);

                Avgrund.show('#greetings-popup');
            }

        },
        customScroll: function () {
            $('.scroll-wrap').jScrollPane({
                autoReinitialise: true,
                verticalGutter: 30
            });
            $('.main-part--left, .part-left-decor').css('opacity', 1);
            $('.main-part--right').css('opacity', 1);
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