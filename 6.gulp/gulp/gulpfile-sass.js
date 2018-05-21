var gulp = require("gulp");
var sass = require('gulp-sass');
//定义任务
gulp.task("sass", function() {
	//导入文件
	gulp.src("sass/index.scss")
		//转代码
		.pipe(sass().on('error', sass.logError))
		//导出文件
		.pipe(gulp.dest("sass/css"))
})
gulp.task("default", ['sass']);

//js->ts
//css->sass
//html
