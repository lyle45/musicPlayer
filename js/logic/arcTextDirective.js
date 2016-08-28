app.directive('arcText',['$interpolate', function($interpolate){
	return {
		scope: false,
		restrict: 'A',
		link: function($scope, iElm, iAttrs) {
			var interpolateFn = $interpolate(iElm.html(), false)
			iElm.html(interpolateFn($scope))
			iElm.arctext({radius: 150});
		}
		
	};
}]);