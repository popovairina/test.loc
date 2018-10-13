module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['_src/libs/**/*.css'])
            .pipe(plugins.cssScss())
            .pipe(gulp.dest('_src/libs'));
        gulp.src(['_src/fonts/**/*.css'])
            .pipe(plugins.cssScss())
            .pipe(gulp.dest('_src/fonts'));
    };
};