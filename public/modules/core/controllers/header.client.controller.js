'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$http', '$window', 'Menus',
	function($scope, $http, $window, Menus) {
		$scope.authentication = localStorage.getItem('currentSession');
		$scope.lastCredentials = localStorage.getItem('credentials');
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

		$scope.logout = function() {

			$http.get('/auth/signout').success(function(response) {
				localStorage.setItem('currentSession', 0);
				localStorage.setItem('credentials', null);
				$window.location.reload();
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

	}
]);
