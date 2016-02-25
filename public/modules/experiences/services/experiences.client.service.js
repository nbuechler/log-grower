'use strict';

/*
api is defined in 'layout.server.view.html' in express part of application
*/

//Experiences service used to communicate Experiences REST endpoints
angular.module('experiences')
.factory('Experiences', ['$resource',
	function($resource) {
		return $resource(api + 'experiences/:experienceId/?user_id=' + localStorage.getItem('_id'), { experienceId: '@_id'
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
		return $resource(api + 'publicExperiences');
	}
]);
