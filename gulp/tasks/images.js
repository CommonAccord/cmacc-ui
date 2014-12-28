'use strict';

var gulp = require('gulp');

gulp.task('images', function() {
	return gulp.src('app/images/**/*', {base: 'app/'})
		.pipe(gulp.dest('dist/'));
});
