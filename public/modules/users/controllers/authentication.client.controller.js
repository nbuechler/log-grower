'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location',
	function($scope, $http, $location) {

		// TODO: If user is signed in then redirect back home

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {

				/**
				 * TODO: It may be worth considering creating a service for this to
				 * handle all error codes... but later.
				 */
				if(response.customCode === 2001){
					// Redirect to the index page
					// If successful we assign the response to the global user model
					localStorage.setItem('currentSession', 1);
					localStorage.setItem('credentials', $scope.credentials.email);
					localStorage.setItem('_id', response._id);
					setTimeout(function(){
						window.location.href = window.location.origin;
					}, 1000);
				} else if (response.customCode === 4031) {
					$scope.error = response.errors[0].msg;
				} else if (response.customCode === 4032) {
					$scope.error = response.msg;
				} else {
					console.error('Unable to signup, try again later');
					$scope.error = 'Unable to signup, try again later';
				}

			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {

				/**
         * TODO: It may be worth considering creating a service for this to
				 * handle all error codes... but later.
         */
        if(response.customCode === 2001){
					// Redirect to the index page
					// If successful we assign the response to the global user model
          localStorage.setItem('currentSession', 1);
				  localStorage.setItem('credentials', $scope.credentials.email);
					localStorage.setItem('_id', response._id);
					setTimeout(function(){
          	window.location.href = window.location.origin;
					}, 1000);
        } else if (response.customCode === 4031) {
          $scope.error = response.errors[0].msg;
        } else if (response.customCode === 4032) {
          $scope.error = response.msg;
        } else {
          console.error('Unable to login, try again later');
					$scope.error = 'Unable to signup, try again later';
        }

			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
