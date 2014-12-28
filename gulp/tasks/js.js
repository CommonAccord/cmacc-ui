'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var size = require('gulp-size');
var print = require('gulp-print');
var mainBowerFiles = require('main-bower-files');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('js:dev', function() {
	return gulp.src(['app/**/*.js', '!**/*_test.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write())
		.pipe(size({
			showFiles: true,
			title: 'size of app.js after sourcemaps and concat:'
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('js:prod', function() {
	return gulp.src(['app/**/*.js', '!**/*_test.js'])
		.pipe(concat('app.js'))
		.pipe(size({
			showFiles: true,
			title: 'size of app.js after concat:'
		}))
		.pipe(ngAnnotate())
		.pipe(size({
			showFiles: true,
			title: 'size of app.js after annotate:'
		}))
		.pipe(uglify())
		.pipe(size({
			showFiles: true,
			title: 'size of app.js after uglify:'
		}))
		.pipe(gulp.dest('dist/'));
});


gulp.task('js:bowerFiles', function() {
	gulp.src(mainBowerFiles())
	    .pipe(print(function(filepath) {
			return "mainBowerFiles are: " + filepath;
		}))
		.pipe(size({
			showFiles: true,
			title: 'size of bowerfiles before concat:'
		}))
		.pipe(concat('bowerFiles.js'))
		.pipe(gulp.dest('dist/'))
		.pipe(size({
			showFiles: true,
			title: 'size of bowerfiles after concat:'
		}));
});

// doc: whenever any javascript file changes, run the js task
gulp.task('js:watch', function() {
	gulp.watch('app/**/*.js', ['js:dev']);
});
