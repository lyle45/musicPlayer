app.directive('newAlbumFormsContainer',['albumsResource', '$mdDialog', function(albumsResource, $mdDialog){
	return {
		name: 'newAlbumFormsContainer',
		scope: {},
		controller: function($scope) {
			$scope.album = {name: '', artist: '', image: ''};
			$scope.newAlbumFormValid = false;
			$scope.newAlbumFormValidated = function(){
				$scope.newAlbumFormValid = true;
			};
			$scope.playlist = [{name: '', path: ''}];
			$scope.addSongToPlaylist = function(){
				$scope.playlist.push({name: '', path: ''})
			};
			$scope.submitNewAlbum = function(){
				var fullAlbumObject = {album: $scope.album, playlist: $scope.playlist}
				console.log(fullAlbumObject);
				albumsResource.postAlbum(fullAlbumObject);
				$mdDialog.hide();
			}
		},
		restrict: 'E',
		templateUrl: 'components/newAlbumFormsContainer/newAlbumFormsContainer.html',
	};
}]);