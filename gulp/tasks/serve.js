'use strict';

var gulp = require('gulp');

gulp.task('watch', ['js:watch', 'html:watch', 'styles:watch']);
gulp.task('serve', ['webserver', 'watch']);
