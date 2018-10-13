module.exports = function (gulp, plugins, src) {
    return function () {
        gulp.src('_src/fonts/**/*.ttf')
            .pipe(plugins.ttf2woff2())
            .pipe(gulp.dest('_src/fonts'));
    };
};