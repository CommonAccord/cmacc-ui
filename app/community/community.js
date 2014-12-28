'use strict';

angular.module('community-page', ['ui.router'])

.config(function($stateProvider) {
	$stateProvider.state('community-page', {
		url: '/community',
		templateUrl: 'community/community.html',
		controller: 'CommunityCtrl'
	});
})

.controller('CommunityCtrl', function($scope) {

});

