app.directive('toolbar',['$mdDialog', function($mdDialog){
	return {
		scope: {},
		templateUrl: 'components/toolbar/toolbar.html',
		link: function($scope, $elem, $attrs){
			$scope.addNewAlbumDialog = function(event){
				$mdDialog.show({
					parent: angular.element(document.body),
					clickOutsideToClose: true,
					template: '<new-album-forms-container></new-album-forms-container>',
					ariaLabel: 'New Album Form',
					targetEvent: event
				})
			}
		}
	}
}])