app.directive('albumsContainer', ['albumsResource', function(albumsResource){
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'components/albumsContainer/albumsContainer.html',
		link: function($scope, iElm, iAttrs) {
			// $scope.albumsArray = albumsResource.getAlbums();
		}
	};
}]);