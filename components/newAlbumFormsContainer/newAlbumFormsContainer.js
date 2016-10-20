app.directive('newAlbumFormsContainer',['albumsResource', '$mdDialog', function(albumsResource, $mdDialog){
	return {
		name: 'newAlbumFormsContainer',
		scope: {},
		controller: function($scope) {
			$scope.album = {album_name: '', album_artist: '', album_image: '', playlist: [{song_title: '', song_url: ''}]};
			$scope.newAlbumFormValid = false;
			// $scope.playlist = [{song_title: '', song_url: ''}];
			$scope.imageRegExp = new RegExp('^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$');
			$scope.tracksRegExp = new RegExp('^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:mp3)$');
			$scope.newAlbumFormValidated = function(){
				$scope.newAlbumFormValid = true;
			};
			$scope.resetAlbumsForm = function () {
				$scope.album.album_artist = $scope.album.album_image = $scope.album.album_name = '';
			};
			$scope.addSongToPlaylist = function(){
				$scope.album.playlist.push({song_title: '', song_url: ''});
			};
			$scope.submitNewAlbum = function(){
				// var fullAlbumObject = {album: $scope.album, playlist: $scope.playlist};
				console.log($scope.album);
				albumsResource.postAlbum($scope.album);
				$mdDialog.hide();
			}
		},
		restrict: 'E',
		templateUrl: 'components/newAlbumFormsContainer/newAlbumFormsContainer.html'
	};
}]);