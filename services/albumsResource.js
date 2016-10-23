app.service('albumsResource', ['$resource', function($resource){
	var albumsArray = $resource('./data/generatedAlbums.json').query();
	return {
		getAlbums: function() {
			return albumsArray;
		},
		postAlbum: function(fullAlbumObject){
			// $resource('http://morad.rocks/player/api/album', {}, {
			// 	save: {
			// 		method: 'POST',
			// 		headers: {'Content-Type':'text/plain'}
			// 	}
			// }).save(fullAlbumObject, function(response){
			// 	console.log('post request successful');
			// })
			// 	var newAlbum = {
			// 		album_image: fullAlbumObject.album.image,
			// 		album_name: fullAlbumObject.album.name,
			// 		album_artist: fullAlbumObject.album.artist,
			// 		// album_id: response.primitiveData
			// 	};
			albumsArray.push(fullAlbumObject);
},
getPlaylist: function(albumId){
	$resource('http://morad.rocks/player/api/album/' + albumId).get(function(data){
		return data.playlist;
	});
}
}
}]);