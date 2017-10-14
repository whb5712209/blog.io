var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less')
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify");



gulp.task('js', function () {
    gulp.src(['js/*.js','!./js/*.min.js']) //该任务针对的文件
        .pipe(uglify())           //压缩
     .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js')); //将会在src/css下生成index.css
});

gulp.task('less', function () {
    gulp.src('less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css')); //将会在src/css下生成index.css
});
gulp.task('css', function () {
    gulp.src('less/*.css') //该任务针对的文件
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css')); //将会在src/css下生成index.css
});
gulp.task('default',['css','less','js','watch']);

gulp.task('watch',function(){
  gulp.watch(['less/*.less'],function(event) {
      gulp.start('less');
  });
gulp.watch(['less/*.css'],function(event) {
    gulp.start('css');
});
  gulp.watch(['js/*.js','!js/*.min.js'],function(event) {
      gulp.start('js');
  });
});
