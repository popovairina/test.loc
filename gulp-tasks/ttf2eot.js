module.exports = function (gulp, plugins, src) {
    return function () {
        gulp.src('_src/fonts/**/*.ttf')
            .pipe(plugins.ttf2eot())
            .pipe(gulp.dest('_src/fonts'));
    };
};