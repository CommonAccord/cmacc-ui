'use strict';

angular.module('myApp', [
	'ui.router',
	'navbar',
	'home-page',
	'community-page',
	'demo-page',
	'mission-page'
])

.config(function($urlRouterProvider, $locationProvider) {

	// when a URL is unrecognized, which page should we fall back to?
	$urlRouterProvider.otherwise('/home');

	// don't use hashbang URLs on newer browsers
	$locationProvider.html5Mode(true);
});
