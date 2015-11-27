'use strict';

var api = 'http://localhost:3000/';

//Experiences service used to communicate Experiences REST endpoints
angular.module('experiences')
.factory('Experiences', ['$resource',
	function($resource) {
		return $resource(api + 'experiences/:experienceId', { experienceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
])
//PublicExperiences service used to communicate Experiences REST endpoints
.factory('PublicExperiences', ['$resource',
	function($resource) {
		return $resource('publicExperiences');
	}
]);
