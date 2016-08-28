app.directive('newAlbumForm', function(){
	return {
		scope: {
			album: '=',
			formValidated: '&',
		},
		require: '^newAlbumFormsContainer',
		restrict: 'E',
		templateUrl: 'components/newAlbumForm/newAlbumForm.html',
	};
});