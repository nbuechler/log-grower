'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location',
	function($scope, $http, $location) {

		// TODO: If user is signed in then redirect back home

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {

				// TRANSLATE THIS CODE
					// /**
	        //  * TODO: It may be worth considering creating a service for this to handle all error codes... but later.
	        //  */
	        if(response.customCode == 2001){
						// Redirect to the index page
	          $location.path('/');
						// If successful we assign the response to the global user model
	          localStorage.setItem('currentSession', 1);
						console.log(response)
	        // } else if (response.customCode == 4031) {
	        //   self.setState({showError: true});
	        //   self.setState({message: response.errors[0].msg});
	        // } else if (response.customCode == 4032) {
	        //   self.setState({showError: true});
	        //   self.setState({message: response.msg});
	        // } else {
	        //   console.error('Unable to login, try again later');
	        }


			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
