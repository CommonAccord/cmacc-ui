'use strict';

var gulp = require('gulp');
var del = require('del');

/**
 * Delete everything in the dist/ directory
 */
gulp.task('clean', function(cb) {
	console.log('\tcleaning contents of dist/**/*');
	del('dist/**/*', cb);
});
