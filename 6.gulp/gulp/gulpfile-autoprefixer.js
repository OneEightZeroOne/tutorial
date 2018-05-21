var gulp = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
//定义任务
gulp.task("autoprefixer", function() {
	//导入文件
	gulp.src("css/index.css")
		//转代码
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		//导出文件
		.pipe(gulp.dest("css/yasuo"))
})
gulp.task("default", ['autoprefixer']);

/*
 --moz
 * */