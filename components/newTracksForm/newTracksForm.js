app.directive('newTracksForm',  function(){
	return {
		scope: {
			playlist: '=',
			addNewTrack: '&',
			formValidated: '&'
		},
		require: '^newAlbumFormsContainer',
		restrict: 'E',
		templateUrl: 'components/newTracksForm/newTracksForm.html',
	};
});