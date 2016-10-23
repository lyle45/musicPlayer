app.directive('musicPlayer', ['$sce', '$rootScope', function ($sce, $rootScope) {
    return {
        restrict: 'E',
        scope: {
            playingAlbum: '='
        },
        templateUrl: 'components/musicPlayer/musicPlayer.html',
        link: function ($scope, $elem, $attrs) {
            $scope.audioSource = '';
            $rootScope.playedTrackIndex = '';
            $scope.audio = $('audio');
            $scope.audioPaused = $scope.audio.paused;
            $scope.checkIfPaused = function () {
                $scope.audioPaused = $scope.audio.paused;
            };
            var albumsContainer = $("albums-container");
            $scope.playSong = function (track) {
                $rootScope.playedTrackIndex = $rootScope.playingAlbum.playlist.indexOf(track);
                $scope.audioSource = $sce.trustAsResourceUrl(track.song_url);
            };
            $rootScope.$watch('playingAlbum', function(newValue, oldValue){
                if (newValue) {
                    $scope.playSong($rootScope.playingAlbum.playlist[0]);
                }
            });
            $scope.closePlayer = function() {
                $elem.children().animate({"top":"-450px"}, 500, function() {
                    $rootScope.playingAlbum = null;
                    $rootScope.playedTrackIndex = '';
                    $rootScope.$apply();
                });
                albumsContainer.animate({"top": "0px"}, 500);
            };
            $scope.audio.on('play', function () {
                $scope.audioPaused = false;
                $scope.$apply()
            });
            $scope.audio.on('pause', function () {
                $scope.audioPaused = true;
                $scope.$apply()
            });
            albumsContainer.animate({"top": "350px"}, 500, function () {
                $elem.children().animate({"top": "150px"}, 500);
            });
        }
    }
}]);