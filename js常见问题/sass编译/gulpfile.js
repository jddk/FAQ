// var gulp = require('gulp');
// var sass = require('gulp-ruby-sass');

// gulp.task('sass', function(){
//     return sass('scss/index.scss')// 编译文件
//         .on('error', sass.logError) // 错误信息
//         .pipe(gulp.dest('css'));//输出路径
//     }
// );

// gulp.task('dist',function(){
//     gulp.watch('./scss/*.scss',['sass']);// 监听的文件
// });

var gulp = require("gulp");
var sass = require('gulp-ruby-sass');  
// var livereload = require('gulp-livereload');  
//sass编译
gulp.task('sass',function(){
    gulp.src('src/sass/*.scss')
        // .pipe(sass())//默认嵌套输出方式
        .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))//展开输出方式
        .pipe(gulp.dest('src/css'))
        // .pipe(livereload());
})

//监听.scss
gulp.task('watch',function(){
   // livereload.listen();//要在这里调用listen()方法
    gulp.watch('src/sass/*.scss',['sass'])
})


//用gulp实现编译
gulp.task('default',['sass','watch']);
