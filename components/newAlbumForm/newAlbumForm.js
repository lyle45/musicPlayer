app.directive('newAlbumForm', function(){
	return {
		scope: {
			album: '=',
			formValidated: '&',
			resetAlbumsForm: '&',
			imageRegExp: '='
		},
		require: '^newAlbumFormsContainer',
		restrict: 'E',
		templateUrl: 'components/newAlbumForm/newAlbumForm.html'
	};
});