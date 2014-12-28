'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run the asset pipeline for production. In general that means everything will be minified and stuff.
 */
gulp.task('prod', function(cb) {
	runSequence('clean',
				'setenv:prod',
				['js:prod', 'js:bowerFiles', 'styles', 'html', 'images'],
				cb);
});
