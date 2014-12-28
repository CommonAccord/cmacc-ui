'use strict';

angular.module('home-page', ['ui.router'])

.config(function($stateProvider) {
	$stateProvider.state('home-page', {
		url: '/home',
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	});
})

.controller('HomeCtrl', function($scope) {
	$scope.numDocs = 100;
});

