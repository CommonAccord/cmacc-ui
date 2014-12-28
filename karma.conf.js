module.exports = function(config) {
	'use strict';

	config.set({

		basePath : './',

		/*
		 * Specify which files are included in the browser and which files are watched/served by Karma
		 */
		files : [
			{pattern: 'bower_components/angular/angular.js',                             watched: false},
			{pattern: 'bower_components/angular-ui-router/release/angular-ui-router.js', watched: false},
			'app/**/*.js'
		],

		autoWatch : true,

		singleRun: true,

		frameworks: ['jasmine'],

		browsers : ['Chrome'],

		plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

		junitReporter : {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}

	});
};
