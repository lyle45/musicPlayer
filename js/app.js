var app = angular.module('musicPlayer', ['ngMaterial', 'ngMessages', 'ngResource'])
app.config(['$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push(function(){
		return {
			request: function(config){
				if (config.url === 'http://morad.rocks/player/api/album') {
					config.data = angular.toJson(config.data);
				}
					return config;
			},
			response: function(response){
				if (response.config.url === 'http://morad.rocks/player/api/albums') {
					response.data = angular.fromJson(response.data);
				}
					return response;
			}
		}
	})
}])