app.directive('album', function(){
	return {
		scope: {
			album: '='
		},
		restrict: 'E',
		templateUrl: 'components/album/album.html',
	};
});