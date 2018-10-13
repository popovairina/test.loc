module.exports = function (gulp, plugins) {
    return function () {
        gulp.src([
            'node_modules/jquery/dist/jquery.min.js'
            // '_src/libs/slick/slick.min.js'
            // 'node_modules/inputmask',
            // '_src/libs/maskedinput/jquery.maskedinput.min.js',
        ])
            .pipe(plugins.concat('libs.js'))
            .pipe(gulp.dest('_src/libs'));


        gulp.src([
            // '_src/libs/slick/slick.css'
            //'_src/libs/jquery-ui/jquery-ui.min.css'
        ])
            .pipe(plugins.concat('libs'))
            .pipe(plugins.sass(/*{ outputStyle: 'expand' }*/).on("error", plugins.notify.onError()))
            .pipe(plugins.rename({ basename: 'libs', suffix: '.min', prefix : '' }))
            // .pipe(plugins.autoprefixer(['last 15 versions']))
            // .pipe(plugins.cleanCss( {level: { 1: { specialComments: 0 } } }))
            .pipe(gulp.dest('public/css'));
    };
};