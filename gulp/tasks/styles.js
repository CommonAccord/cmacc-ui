'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');

/**
 * Takes care of CSS and fonts.
 */
gulp.task('styles', ['styles:css']);

/**
 * First processes all the less files (using the styles:less task), then concatenates and minifies
 * the generated CSS files, then copies the result to dist/.
 */
gulp.task('styles:css', ['styles:less'], function() {
	gulp.src('app/styles/*.css')
		.pipe(concat('all.css'))
		.pipe(size({
			showFiles: true,
			title: 'size of css after concat'
		}))
		.pipe(minifyCss())
		.pipe(size({
			showFiles: true,
			title: 'size of css after minify'
		}))
		.pipe(gulp.dest('dist/css/'));
});

/**
 * Compile app.less into a CSS file. This is a SYNCHRONOUS task (using the 'return a stream'
 * paradigm).
 */
gulp.task('styles:less', function() {
	return gulp.src('app/styles/*.less')
		.pipe(size({
			showFiles: true,
			title: 'size of initial less files'
		}))
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(size({
			showFiles: true,
			title: 'size of compiled less files with sourcemaps'
		}))
		.pipe(gulp.dest('app/styles/'));
});


/**
 * Watch for changes to our less files. If a less file changes, run the 'styles:css' task again
 * (which will in turn run the 'styles:less' task as well).
 */
gulp.task('styles:watch', function() {
	gulp.watch('app/styles/*.less', ['styles:css']);
});
