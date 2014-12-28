'use strict';

angular.module('demo-page', ['ui.router'])

.config(function($stateProvider) {
	$stateProvider.state('demo-page', {
		url: '/demo',
		templateUrl: 'demo/demo.html',
		controller: 'DemoCtrl'
	});
})

.controller('DemoCtrl', function($scope, $http, $sce) {
	var successCallback = function(data) {
		console.log('sucess callback yay');
		$scope.doc = $sce.trustAsHtml(data);
	};
	var errorCallback = function() {
		console.log('error callback shiiiit');
	};
	
	// the following can request an HTML page and extract all the HTML into a variable. One could
	// attempt to insert the contents of that variable in the view. It sort of works, but the real
	// answer is for the backand to return JSON instead of HTML.

	$http.get('/index.php?action=print&file=./02/Demo/Acme_Shirley_NDA_Mutual.md')
	.success(successCallback)
	.error(errorCallback);
});

