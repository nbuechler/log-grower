'use strict';

// Activities controller
angular.module('activities').controller('ActivitiesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Activities', 'PublicActivities',
	function($scope, $stateParams, $location, Authentication, Activities, PublicActivities) {
		$scope.authentication = {user : {id: null}};
		$scope.authentication.user._id = localStorage.getItem('_id');

		// Create new Activity
		$scope.create = function() {
			// Create new Activity object
			var activity = new Activities ({
				name: this.name,
        description: this.description,
        importance: this.importance ? this.importance : 50,
				privacy: this.privacy ? this.privacy : 0,
				archived: this.archived ? this.archived : 0,
				user: {_id: localStorage.getItem('_id')}
			});

			// Redirect after save
			activity.$save(function(response) {
				$location.path('activities/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Activity
		$scope.remove = function(activity) {
			/*
			 * It makes more sense to archive and hide, then remove from the system.
			 * Kept Logic commented just in case
			 */

			// if ( activity ) {
			// 	activity.$remove();
			//
			// 	for (var i in $scope.activities) {
			// 		if ($scope.activities [i] === activity) {
			// 			$scope.activities.splice(i, 1);
			// 		}
			// 	}
			// } else {
			// 	$scope.activity.$remove(function() {
					$location.path('activities');
			// 	});
			// }
		};

		// Update existing Activity
		$scope.update = function() {

			$scope.activity.privacy = $scope.activity.privacy ? $scope.activity.privacy : 0;
			$scope.activity.archived = 0;

			var activity = $scope.activity;

			activity.$update(function() {
				$location.path('activities/' + activity._id);
				window.location.reload(); // TODO: fix this hack. It's a hack because it forces an update so angular works.
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Archve existing Activity
		$scope.archive = function() {

			$scope.activity.privacy = $scope.activity.privacy ? $scope.activity.privacy : 0;
			$scope.activity.archived = 1;

			var activity = $scope.activity;

			activity.$update(function() {
				$location.path('activities/' + activity._id);
				window.location.reload(); // TODO: fix this hack. It's a hack because it forces an update so angular works.
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

		};

    // Set marker for creating new activity... for first time users
    $scope.displayFirstTime = true; //not used

		// Find a list of Activities
		$scope.find = function() {
			$scope.activities = Activities.query();
		};

		// Find a list of PublicActivities
		$scope.findPublic = function() {
			$scope.activities = PublicActivities.query();
		};

		// Find existing Activity
		$scope.findOne = function() {
			$scope.activity = Activities.get({
				activityId: $stateParams.activityId
			});
		};

    /*
     * Toggle button not used currently... but there is logic that can be used to toggle.
     */

    // Show Public Log defaults to false
    $scope.hidePublic = true;

    // Toggle Public Log
    $scope.togglePublic = function() {
        if($scope.hidePublic){
            $scope.hidePublic = false;
        } else {
            $scope.hidePublic = true;
        }
    };

	}
]);

//Change the html background to match due to styling of angular-material on the height style of body.
d3.select('html').style('background-color', '#222222');
