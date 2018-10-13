var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({pattern: '*'});

gulp.task('default', ['sass', 'js', 'img', 'fonts', 'browsersync'], function() {
    gulp.watch(['_src/sass/**/*.sass', 'app/libs/**/*'], ['sass']);
    gulp.watch(['_src/libs/**/*.js', '_src/js/**/*.js'], ['js']);
    gulp.watch(['_src/img/**/*'], ['img']);

    gulp.watch('public/**/*.php', plugins.browserSync.reload);
    gulp.watch('_src/**/*.js', plugins.browserSync.reload);
});

gulp.task('js', ['libs'], getTask('scripts'));
gulp.task('sass', getTask('sass'));

gulp.task('css2sass', getTask('css2sass'));

gulp.task('libs', getTask('libs'));
gulp.task('fonts', getTask('fonts'));
gulp.task('img', function () {
    gulp.src(['_src/img/**/*'])
        .pipe(gulp.dest('public/img'));
});
gulp.task('build', ['sass','js'], getTask('build'));

gulp.task('browsersync', getTask('browsersync'));

gulp.task('temp', function () {
    var files = [];
    gulp.src('_src/fonts/qwe/**/*.otf')
        .pipe(plugins.rename(function (file) {
            // file.basename = file.basename.replace(/\s+/ig, '') + '/' + file.basename.replace(/\s+/ig, '');
            file.basename = file.basename.replace(/\s+/ig, '');
        }))
        .pipe(gulp.dest('_src/fonts/qweqw'));

    console.log(files);
});

gulp.task('ttf2woff', getTask('ttf2woff'));
gulp.task('ttf2woff2', getTask('ttf2woff2'));
gulp.task('ttf2eot', getTask('ttf2eot'));

function getTask(task, src) {
    return require('./gulp-tasks/' + task)(gulp, plugins, src);
}