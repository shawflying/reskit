var gulp = require('gulp');


//js 压缩
gulp.task('build:js', function () {
    return gulp.src('lib/*.js')
        .pipe(gulp.dest('build/')) //正常 没有压缩的情况
});


gulp.task('build', ['build:js']);

gulp.task('default', ['build']);


gulp.task('watch', function () {
});