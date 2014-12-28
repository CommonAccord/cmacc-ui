'use strict';

var gulp = require('gulp');

/*
 * Set the NODE_ENV environment variable to 'development' or 'production'. This will only affect the
 * process.env object in node (which just contains a list of the host OS's environment
 * variables). It will not actually set a environment variable on the host operating system.
 *
 * main-bower-files uses NODE_ENV when determining which file to consider the 'main' file when
 * reading the 'overrides' section of the carrotmd bower.json.
 */


gulp.task('setenv:prod', function() {
	console.log('\tprod:setenv: setting NODE_ENV to \'production\'');
	process.env.NODE_ENV = 'production';
});

gulp.task('setenv:dev', function() {
	console.log('\tdev:setenv: setting NODE_ENV to \'development\'');
	process.env.NODE_ENV = 'development';
});
