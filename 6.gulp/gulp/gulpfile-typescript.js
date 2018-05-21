var gulp = require("gulp");
var ts = require('gulp-typescript');
gulp.task('imagemin', function() {
	//将你的默认的任务代码放在这
	//导入文件
	gulp.src("./ts/1.ts")
		//用插件处理
		.pipe(ts({
			noImplicitAny: true,
			outFile: 'output.js'
		}))
		//导出文件
		.pipe(gulp.dest('./ts/js'));
});
gulp.task('default', ['imagemin']);