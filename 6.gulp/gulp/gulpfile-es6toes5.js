//引入模块
var gulp = require("gulp");
//引入插件模块
//重命名插件
var rename = require("gulp-rename");
//压缩JS插件
var uglify = require('gulp-uglify');
//es6转es6
const babel = require('gulp-babel');
//定义任务
gulp.task("minifyjs", function() {
	//导入文件
	gulp.src("js/H_details.js")
		//转代码
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		//执行插件
		//.pipe(rename("goodbye.md"))
		//导出文件
		.pipe(gulp.dest("js/yasuo"))
})

gulp.task("default", ['minifyjs']);