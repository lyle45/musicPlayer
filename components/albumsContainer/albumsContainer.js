app.directive('albumsContainer', ['albumsResource', '$rootScope' , function(albumsResource, $rootScope){
	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'components/albumsContainer/albumsContainer.html',
		link: function($scope, $elem, $attrs) {
			$scope.albumsArray = albumsResource.getAlbums();
			// $scope.play = function (album) {
			// 	$rootScope.playingAlbum = album;
			// }
            // $scope.$on('animatePlayerOpen', function () {
             //    $elem.animate({"top": "300px"});
            // })
		}
	};
}]);