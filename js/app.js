requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
            'lib/jquery.min'
        ],
        velocity: 'lib/velocity.min',
        velocityUI: 'lib/velocity.ui.min',
        scrollToFixed: 'lib/jquery-scrolltofixed-min',
        customScrollBar: 'lib/jquery.mCustomScrollbar.concat.min',
        scrollr: 'skrollr.min',
        main: 'main'
    }
});

require(['jquery'], function () {
   require(['main', 'scrollToFixed', 'customScrollBar'], function (app) {
       app.init();
   });
});