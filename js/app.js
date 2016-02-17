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
        mousewheel: 'lib/jquery.mousewheel',
        customScrollBar: 'lib/jquery.mCustomScrollbar.concat.min',
        jScrollPane: 'lib/jquery.jscrollpane.min',
        cookie: 'lib/jquery.cookie',
        avgrund: 'lib/avgrund',
        main: 'main'
    }
});

require(['jquery'], function () {
   require(['main','avgrund', 'scrollToFixed', 'mousewheel', 'jScrollPane', 'cookie'], function (app) {
       app.init();
   });
});