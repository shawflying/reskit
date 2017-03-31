var gulp = require('gulp');
var babel = require("gulp-babel");
// var jshint = require("gulp-jshint");
var uglify = require('gulp-uglify'); //加载js压缩

//js 代码校验
// gulp.task('jsLint', function() {
//     gulp.src('lib/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter()); // 输出检查结果
// });

//js 压缩
gulp.task('build:js', function() {
    return gulp.src('lib/*.js')
        .pipe(gulp.dest('build/')) //正常 没有压缩的情况
});

gulp.task('babel', function() {
    return gulp.src(['lib/*.js', '!lib/*.min.js']) // ES6 源码存放的路径 //获取文件，同时过滤掉.min.js文件
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});


gulp.task('build', ['babel']);

gulp.task('default', ['build']);


gulp.task('watch', function() {});