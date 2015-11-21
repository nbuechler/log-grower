'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);

// jshint ignore: start

angular.module('core').controller('HomeController', ['$scope',
	function($scope) {
		// This provides Authentication context.
		$scope.authentication = null;


		var scene = document.getElementById('scene');
		var parallax = new Parallax(scene);

	}
]);
