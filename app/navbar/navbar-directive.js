'use strict';

angular.module('navbar', [])

.directive('cmaccNavbar', function() {
	return {
		restrict: 'E',
		templateUrl: 'navbar/navbar.html',
		controller: 'NavCtrl'
	}
})

.controller('NavCtrl', function($scope) {
	// eventually this will have stuff about whether the user is logged in and stuff
	$scope.hey = "mooxus";
});
