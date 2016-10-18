app.directive('musicPlayer', ['$sce', '$rootScope', function ($sce, $rootScope) {
    return {
        restrict: 'E',
        scope: {
            playingAlbum: '='
        },
        templateUrl: 'components/musicPlayer/musicPlayer.html',
        link: function ($scope, $elem, $attrs) {
            $scope.audioSource = '';
            $scope.playedTrackIndex = '';
            var albumsContainer = $("albums-container");
            $scope.playSong = function (track) {
                $scope.playedTrackIndex = $rootScope.playingAlbum.playlist.indexOf(track);
                $scope.audioSource = $sce.trustAsResourceUrl(track.songUrl);
            };
            $rootScope.$watch('playingAlbum', function(newValue, oldValue){
                if (newValue) {
                    $scope.playSong($rootScope.playingAlbum.playlist[0]);
                }
            });
            $scope.closePlayer = function() {
                $elem.children().animate({"top":"-450px"}, 500, function() {
                    $rootScope.playingAlbum = null;
                    $rootScope.$apply();
                });
                albumsContainer.animate({"top": "0px"}, 500);
            };
            albumsContainer.animate({"top": "300px"}, 500, function () {
                $elem.children().animate({"top": "100px"}, 500);
            })
        }
    }
}]);