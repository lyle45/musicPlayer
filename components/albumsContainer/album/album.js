app.directive('album',['$rootScope', function($rootScope){
	return {
		scope: {
			album: '='
		},
		restrict: 'E',
		templateUrl: 'components/albumsContainer/album/album.html',
		link: function ($scope, $elem, $attrs) {
			$scope.play = function() {
				$rootScope.playingAlbum = scope.album;
			}
		}
	};
}]);