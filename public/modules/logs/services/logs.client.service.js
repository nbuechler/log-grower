'use strict';

var api = 'http://localhost:3000/';

//Logs service used to communicate Logs REST endpoints
angular.module('logs')
.factory('Logs', ['$resource',
	function($resource) {
		return $resource(api + 'logs/:logId', { logId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
])
//PublicLogs service used to communicate Activities REST endpoints
.factory('PublicLogs', ['$resource',
	function($resource) {
		return $resource('publicLogs');
	}
]);
