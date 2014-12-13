
var rcrApp = angular.module('rcr',[]);
rcrApp.controller('EbayController', ['$scope', '$http', function($scope, $http) {
	// Construct the request
	// Replace MyAppID with your Production AppID
	var url = "http://svcs.ebay.com/services/search/FindingService/v1";
		url += "?OPERATION-NAME=findItemsByKeywords";
		url += "&SERVICE-VERSION=1.0.0";
		url += "&SECURITY-APPNAME=UCIrvine-5b9a-4327-a068-22403f51a8dc";
		url += "&GLOBAL-ID=EBAY-US";
		url += "&RESPONSE-DATA-FORMAT=JSON";
		// url += "&callback=_cb_findItemsByKeywords";
		url += "&REST-PAYLOAD";
		url += "&keywords=harry%20potter";
		// url += "&paginationInput.entriesPerPage=3";
		// url += urlfilter;

		$http.get(url).
			success(function(data, status, headers, config) {
				var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
				var html = [];
				for (var i = 0; i < items.length; ++i) {
					var item     = items[i];
					var title    = item.title;
					var pic      = item.galleryURL;
					var viewitem = item.viewItemURL;
					if (null != title && null != viewitem) {
						console.log(pic);
						console.log(viewitem);
						console.log(title);
					}
				}
				console.log("done");
			}).
			error(function(data, status, headers, config) {
				console.log("an error occurred: " + data);
			});
}]);