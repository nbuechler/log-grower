'use strict';

var api = 'http://' + config.ip + ':' + config.gatewayPort + '/';

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
