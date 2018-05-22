var gulp = require("gulp");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
//es6转es6
const babel = require('gulp-babel');
var refresh = require('gulp-refresh');

var jade = require('gulp-jade');
//定义任务
//定义任务 sass任务
gulp.task("sass", function() {
	//导入文件
	gulp.src("project/sass/*.scss")
		//转代码
		.pipe(sass().on('error', sass.logError))
		//导出文件
		.pipe(gulp.dest("project/dist"))
})
//压缩JS和es6转化的任务
gulp.task("minifyjs", function() {
	//导入文件
	gulp.src("project/js/*.js")
		//转代码
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		//执行插件
		//.pipe(rename("goodbye.md"))
		//导出文件
		.pipe(gulp.dest("project/dist"))
})
//定义任务
/*gulp.task("jade", function() {
	var YOUR_LOCALS = {};
	//导入文件
	gulp.src("./project/jade/index.jade")
		//转代码
		.pipe(jade({
			locals: YOUR_LOCALS
		}))
		//导出文件
		.pipe(gulp.dest("./project/dist"))
})*/

//监听文件 文件改动时候触发任务
/*gulp.task('watch', () => {
	refresh.listen({
		host:"localhost",
		port:12345,
		basePath:"./project/dist",
		
	})
	gulp.watch(['project/sass/*.scss', ], ['sass']);
	gulp.watch('project/js/*.js', ['minifyjs']);
})*/

var browserSync = require('browser-sync');
gulp.task('myserver', () => {
	// 开启服务器
	browserSync({
		server: './project/dist',
		// 代理服务器
		//proxy:'http://localhost:10086',
		// 端口
		port: 10087,
		files: ['./project/sass/*.scss', './project/js/*.js']
	});

	// 监听sass文件修改
	gulp.watch('project/sass/*.scss', ['sass']);
	gulp.watch('project/js/*.js', ['minifyjs']);
	//gulp.watch('project/jade/*.jade', ['jade']);
});

//gulp命令时候 敲命令时候触发任务
gulp.task("default", ['sass', 'minifyjs', 'myserver']);