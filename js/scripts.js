$(document).ready(function(){


	$("#lego-that").on("click", function(){
		var x = $("#thing").val();
		search(x);
	});

	var search = function(query){
		var search_url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a0b48e70fd67c9004698798bb64c18e8&tags=lego+' + query + '&per_page=10&format=json&nojsoncallback=1';
		$.ajax({
			type: "GET",
			url: search_url,
			success: function(response){
				var user = response['photos']['photo'][0]['owner'];
				var photo = response['photos']['photo'][0]['id'];
				var photo_url = 'https://www.flickr.com/photos/' + user + "/" + photo
				var user2 = response['photos']['photo'][1]['owner'];
				var photo2 = response['photos']['photo'][1]['id'];
				var photo_url2 = 'https://www.flickr.com/photos/' + user2 + "/" + photo2
				// $(".frame").html('<a href="' + photo_url + '" >View Your LEGO Creation</a>')
				var new_search_url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=a0b48e70fd67c9004698798bb64c18e8&photo_id=' + photo + '&format=json&nojsoncallback=1'
				$.ajax({
					type: "GET",
					url: new_search_url,
					success: function(response2){
						var image_url = response2['sizes']['size'][7]['source'];
						$(".frame").html("<img id='photo' src='" + image_url + "'><br><a href='" + photo_url2 + "' >No Likey? Try Again.</a>")
					}
				})
			}
		});
	};

});