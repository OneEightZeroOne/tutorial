var gulp = require("gulp");
var imagemin = require('gulp-imagemin');
gulp.task('imagemin', function() {
	//将你的默认的任务代码放在这
	//导入文件
	gulp.src("./img/1.jpg")
		//用插件处理
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
			svgoPlugins: [{
				removeViewBox: true
			}]
		}))
		//导出文件
		.pipe(gulp.dest('./img/minify'));
});
gulp.task('default', ['imagemin']);