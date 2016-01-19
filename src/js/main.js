define(['jquery'], function ($) {
    var app = app || {};
    app.main = {
        init: function() {
            this.test();
        },
        test: function () {
            console.log('test');
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