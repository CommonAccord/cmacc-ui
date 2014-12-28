'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {

	gulp.src('dist')
		.pipe(webserver({
			host: 'localhost',
			port: '8001',
			livereload: true,
			directoryListing: false, // change to true as soon as bug #26 is fixed
			open: true,
			fallback: 'index.html',
			proxies: [
				{
					source: '/index.php',
					target: 'http://commonaccord.org/index.php'
				}]
		}));
});
