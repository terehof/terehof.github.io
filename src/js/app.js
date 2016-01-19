requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
            'lib/jquery.min'
        ],
        velocity: 'lib/velocity.min',
        velocityUI: 'lib/velocity.ui.min',
        main: 'main'
    }
});

require(['jquery'], function () {
   require(['main'], function (app) {
       app.init();
   });
});