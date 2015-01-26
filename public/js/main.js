var user_name  = "river_city_retro";
var auth_token = "UCIrvine-fe67-4b99-a5ed-2f65fd8b6eed";
var realUrl = "http://svcs.ebay.com/services/search/FindingService/v1?callback=?&OPERATION-NAME=findItemsAdvanced&SECURITY-APPNAME=" + auth_token + "&RESPONSE-DATA-FORMAT=XML&REST-PAYLOAD&itemFilter(0).name=Seller&itemFilter(0).value(0)=seller1&itemFilter(0).value(1)=" + user_name + "&itemFilter(1).name=LocatedIn&itemFilter(1).value=WorldWide&paginationInput.entriesPerPage=50";

$(function() {
	$.ajax({
		url: realUrl,
		dataType: "jsonp",
		success: function(result) {
			console.log(result);

			var searchResult = result.findItemsAdvancedResponse[0].searchResult[0];
			var count = searchResult.count;

			for(var i = 0 ; i < count; i++) {
				var item = searchResult.item[i];
				var title = item.title;
				var itemUrl = item.viewItemURL;
				var imgUrl = item.galleryURL;

				$('<div class="item"><img src="' + title + '"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
				$('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

			}
			$('.item').first().addClass('active');
			$('.carousel-indicators > li').first().addClass('active');
			$('#item-carousel').carousel();
		},
		error: function(data) {
			console.log("what the fuck...");
		}
	})
});
