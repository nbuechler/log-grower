'use strict';

/*
api is defined in 'layout.server.view.html' in express part of application
*/

//Logs service used to communicate Logs REST endpoints
angular.module('logs')
.factory('Logs', ['$resource',
	function($resource) {
		return $resource(api + 'logs/:logId/?user_id=' + localStorage.getItem('_id'), { logId: '@_id'
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
		return $resource(api + 'publicLogs');
	}
]);
