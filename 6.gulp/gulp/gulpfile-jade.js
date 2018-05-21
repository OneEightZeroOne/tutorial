var gulp = require("gulp");
var jade = require('gulp-jade');
//定义任务
gulp.task("jade", function() {
	var YOUR_LOCALS = {};
	//导入文件
	gulp.src("jade/index.jade")
		//转代码
		.pipe(jade({
			locals: YOUR_LOCALS
		}))
		//导出文件
		.pipe(gulp.dest("jade/html"))
})
gulp.task("default", ['jade']);

//js->ts
//css->sass
//html