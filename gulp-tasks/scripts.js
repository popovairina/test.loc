module.exports = function (gulp, plugins) {
    return function () {
        gulp.src([
            '_src/libs/libs.js',
            '_src/js/common.js' // Always at the end
        ])
            .pipe(plugins.concat('scripts.min.js'))
            // .pipe(plugins.uglify())
            .pipe(gulp.dest('public/js'));

        gulp.src([
            '_src/js/**/*.js',
            '!_src/js/common.js',
        ])
            .pipe(gulp.dest('public/js'));
    };
};