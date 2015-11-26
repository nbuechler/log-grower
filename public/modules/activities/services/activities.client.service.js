'use strict';

var api = 'http://localhost:3000/';

//Activities service used to communicate Activities REST endpoints
angular.module('activities')
.factory('Activities', ['$resource',
	function($resource) {
		return $resource(api + 'activities/:activityId', { activityId: '@_id'
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
