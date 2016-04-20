'use strict';

var gulp = require('gulp'),
        webserver = require('gulp-webserver'),
        browserSync = require('browser-sync'),
        gutil = require('gulp-util'),
        reload = browserSync.reload;


gulp.task('local-server', localServer);
function localServer() {
    server('http://localhost:8087/tracking-public', 7000);
};


function server(target, port) {
    gulp.src('app')
    .pipe(webserver({
        port: port,
        livereload: true,
        open: true,
        proxies: [{
            source: '/tracking-public',
            target: target
        }]
    }));

    gulp.watch(['app/*']);
}

/*gulp.task('default', ['root', 'css', 'img', 'gridFonts', 'js', 'jsdev', 'iconsDev', 'iconsProd', 'cssdev', 'modules-dev', 'watch']);

 gulp.task('dev', ['root', 'img', 'gridFonts', 'jsdev', 'iconsDev', 'cssdev', 'modules-dev'], reload);
 gulp.task('prod', ['prod-index-html', 'img', 'gridFonts', 'js', 'iconsProd', 'css', 'modules', 'scripts'], reload);*/
