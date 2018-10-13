module.exports = function (gulp, plugins, src) {
    return function () {
        gulp.src('_src/fonts/**')
            .pipe(gulp.dest('public/fonts'));
    };
};