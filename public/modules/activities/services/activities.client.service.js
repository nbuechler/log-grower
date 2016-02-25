'use strict';

/*
api is defined in 'layout.server.view.html' in express part of application
*/

//Activities service used to communicate Activities REST endpoints
angular.module('activities')
.factory('Activities', ['$resource',
	function($resource) {
		return $resource(api + 'activities/:activityId/?user_id=' + localStorage.getItem('_id'), { activityId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
])
//PublicActivities service used to communicate Activities REST endpoints
.factory('PublicActivities', ['$resource',
	function($resource) {
		return $resource(api + 'publicActivities');
	}
]);
