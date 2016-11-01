//引入gulp
var gulp = require('gulp');
//引入组件
// var jshint = require('gulp-jshint');//用于检测js是否有错误
var sass = require('gulp-sass');//sass
var concat = require('gulp-concat')//合并文件
var uglify = require('gulp-uglify')//压缩
var rename = require('gulp-rename');//重命名
var minicss = require('gulp-clean-css');

//在编译之前检查js脚本是否全部正确
gulp.task('minijs',function(){
	 gulp.src('libs/src/js/*.js')
	// .pipe(concat('diog.js'))//需要合并的文件
	// .pipe(gulp.dest('libs/dist'))//合并成功后的文件存放目录
	.pipe(uglify())//压缩
	.pipe(rename({suffix:'.min'}))//合并成功后的文件改名
	.pipe(gulp.dest('libs/build/js'));//把压缩好的文件存放到该目录
})

//压缩css
gulp.task('minicss',function(){
	return gulp.src('libs/src/css/*.css')//需要操作的文件
	.pipe(rename({suffix:'.min'}))//renam压缩后的文件名
	.pipe(minicss({compatibility:'ie7'}))//执行压缩
	.pipe(gulp.dest('libs/build/css'));//输出文件夹
})

//sass编译
gulp.task('sass',function(){
	gulp.src('libs/src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('libs/src/css'));
})

//创建watch任务去检测html文件，其定义了当html改动之后，去调用一个Gulp的Task
gulp.task('watch',function(){
	gulp.watch(['libs/src/js/*.js'],['minijs']);
	gulp.watch(['libs/src/css/*.css'],['minicss']);
	gulp.watch(['libs/src/sass/*.scss'],['sass']);
})

//默认任务
//gulp defalut
gulp.task('default',function(){
	gulp.run('watch');
})
