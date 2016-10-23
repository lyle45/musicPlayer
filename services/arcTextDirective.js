app.directive('arcText',['$interpolate', function($interpolate){
	return {
		scope: false,
		restrict: 'A',
		link: function($scope, $elem, $attrs) {
			var interpolateFn = $interpolate($elem.html(), false);
			$elem.html(interpolateFn($scope));
			$elem.arctext({radius: 150});
		}
		
	};
}]);