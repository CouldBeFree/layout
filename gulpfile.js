const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync')

gulp.task('sass', function () {
	return gulp.src('app/sass/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('sync', function () {
	browserSync.init({
		server: {
			baseDir: "app"
		},
		notify: false
	});
});

gulp.task('html', function () {
	return gulp.src('app/*.html')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function () {
	gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/*.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('sass', 'sync', 'watch'));
