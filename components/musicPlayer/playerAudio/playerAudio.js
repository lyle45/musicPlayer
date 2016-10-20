app.directive('playerAudio', function(){
   return {
       scope: {
           audioSource: '='
       },
       restrict: 'E',
       template: '<audio ng-src="{{audioSource}}" autoplay="true" controls></audio>',
       link: function ($scope, $elem, $attrs) {
           $elem
       }
   }
});