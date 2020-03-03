var gulp = require('gulp'),
    watch = require('gulp-watch'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify'),
    jsmin = require('gulp-jsmin'),
    util = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    historyApiFallback = require('connect-history-api-fallback'),
    data = require('gulp-data'),
    fs = require('fs');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var path = {
    build: {
        pug: '',
        js: 'js/',
        css: 'css/',
        img: 'img/',
        fonts: 'fonts/'
    },
    src: {
        js: 'src/js/*.js',
        style: 'src/style/main.scss',
        pug: 'src/templates/*.pug',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        pug: 'src/**/**/*.pug',
        json: 'src/data.json',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    }
};

gulp.task('templates', function buildHTML() {
    return gulp.src(path.src.pug)
        .pipe(data( function(file) {
            return JSON.parse(
                fs.readFileSync('./src/data.json')
            );
        } ))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.pug))
        .pipe(reload({ stream:true }));
});
gulp.task('js', function () {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({ stream:true }));
});
gulp.task('js-min', function () {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify()).on('error', util.log)
        .pipe(jsmin())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({ stream:true }));
});

gulp.task('styles', function () {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream:true }));
});
gulp.task('styles-min', function () {
    return gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 0.01%'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename('style.css'))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream:true }));
});

gulp.task('images', function() {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        /*.pipe(imagemin({ //Сожмем их
         progressive: true,
         svgoPlugins: [{removeViewBox: false}],
         use: [pngquant()],
         interlaced: true
         }))*/
        .pipe(reload({ stream:true }));
});
gulp.task('fonts', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({ stream:true }));
});


gulp.task('dev-watch', ['dev'], function () {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [historyApiFallback({})]
        },
        port: 3000
    });
    watch([path.watch.json], function(event, cb) {
        gulp.start('templates');
    });
    watch([path.watch.pug], function(event, cb) {
        gulp.start('templates');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('styles');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('images');
    });
});
gulp.task('prod-watch', ['prod'], function () {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [historyApiFallback({})]
        },
        port: 3003
    });
    watch([path.watch.json], function(event, cb) {
        gulp.start('templates');
    });
    watch([path.watch.pug], function(event, cb) {
        gulp.start('templates');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('styles-min');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js-min');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('images');
    });
});
gulp.task('dev', ['templates', 'styles', 'js']);
gulp.task('prod', ['templates', 'styles-min', 'js-min']);


gulp.task('default', ['dev-watch']);