app.directive('newTracksForm',  function(){
	return {
		scope: {
			playlist: '=',
			addNewTrack: '&',
			formValidated: '&',
			tracksRegExp: '='
		},
		require: '^newAlbumFormsContainer',
		restrict: 'E',
		templateUrl: 'components/newTracksForm/newTracksForm.html'
	};
});