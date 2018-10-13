module.exports = function (gulp, plugins, src) {
    return function () {
        gulp.src('_src/sass/**/*.sass')
            .pipe(plugins.sass({ outputStyle: 'expand' }).on("error", plugins.notify.onError()))
            .pipe(plugins.rename({ suffix: '.min', prefix : '' }))
            .pipe(plugins.autoprefixer(['last 15 versions']))
            .pipe(plugins.cleanCss( {level: { 1: { specialComments: 0 } } }))
            .pipe(gulp.dest('public/css'))
            .pipe(plugins.browserSync.reload({stream: true}));;
    };
};