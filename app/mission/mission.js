'use strict';

angular.module('mission-page', ['ui.router'])

.config(function($stateProvider) {
	$stateProvider.state('mission-page', {
		url: '/mission',
		templateUrl: 'mission/mission.html',
		controller: 'MissionCtrl'
	});
})

.controller('MissionCtrl', function($scope) {

});

