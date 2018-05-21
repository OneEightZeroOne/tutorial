//使用包
var gulp = require("gulp");
//var jQuery  = require("jquery");
//引入gulpUglify包
var gulpUglify = require("gulp-uglify");
var gulpCleanCss = require("gulp-clean-css");
const babel = require('gulp-babel');
//console.log(gulp);

//创建第一个任务 压缩JS文件
gulp.task('yasuojs', function() {
	// 将你的默认的任务代码放在这
	//导入文件
	gulp.src("./js/test.js")
		//用插件处理
		.pipe(gulpUglify())
		//导出文件
		.pipe(gulp.dest('./js/yasuo'));
});

gulp.task('yasuocss', function() {
	// 将你的默认的任务代码放在这
	//导入文件
	gulp.src("./css/index.css")
		//用插件处理
		.pipe(gulpCleanCss())
		//导出文件
		.pipe(gulp.dest('./css/yasuo'));
});

//默认处理的任务序列
gulp.task('default', ['yasuocss']);