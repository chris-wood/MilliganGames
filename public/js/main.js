
// Construct the request for Pat's store contents
// Replace MyAppID with your Production AppID
var url = "https://api.ebay.com/wsapi";
	// url += "?OPERATION-NAME=findItemsByKeywords";
	// url += "&SERVICE-VERSION=1.0.0";
	// url += "&SECURITY-APPNAME=******";
	// url += "&GLOBAL-ID=EBAY-US";
	// url += "&RESPONSE-DATA-FORMAT=JSON";
	// // url += "&itemFilter.name=river_city_retro";
	// // url += "&callback=_cb_findItemsByKeywords";
	url += "&callback=?";
	// url += "&REST-PAYLOAD";
	// url += "&keywords=river_city_retro";
	// // url += "&keywords=harry%20potter";
	// // url += "&paginationInput.entriesPerPage=3";
	// // url += urlfilter;

var requestString = '<GetSellerListRequest xmlns="urn:ebay:apis:eBLBaseComponents"><RequesterCredentials><eBayAuthToken>*****</eBayAuthToken></RequesterCredentials><UserID>river_city_retro</UserID><Pagination><EntriesPerPage>200</EntriesPerPage><PageNumber>1</PageNumber></Pagination><OutputSelector>ItemArray.Item.ItemID</OutputSelector><OutputSelector>ItemArray.Item.Quantity</OutputSelector><OutputSelector>ItemArray.Item.Title</OutputSelector><OutputSelector>ItemArray.Item.PrimaryCategory.CategoryID</OutputSelector><OutputSelector>ItemArray.Item.PrimaryCategory.CategoryName</OutputSelector></GetSellerListRequest>';

//  = '<GetSellerListRequest xmlns="urn:ebay:apis:eBLBaseComponents">
//   <RequesterCredentials>
//     <eBayAuthToken>******</eBayAuthToken>
//   </RequesterCredentials>
//   <ErrorLanguage>en_US</ErrorLanguage>
//   <WarningLevel>High</WarningLevel>
//   <StartTimeFrom>2013-06-01T21:59:59.005Z</StartTimeFrom> 
//   <StartTimeTo>2013-09-26T21:59:59.005Z</StartTimeTo>
//   <EndTimeFrom>2013-09-26</EndTimeFrom>
//   <EndTimeTo>2013-11-26</EndTimeTo>
//   <GranularityLevel>Coarse</GranularityLevel>
//   <UserID>river_city_retro</UserID>
//   <Pagination>
//     <EntriesPerPage>200</EntriesPerPage>
//     <PageNumber>1</PageNumber>
//   </Pagination>
//   <OutputSelector>ItemArray.Item.ItemID</OutputSelector>
//   <OutputSelector>ItemArray.Item.Quantity</OutputSelector>
//   <OutputSelector>ItemArray.Item.Title</OutputSelector>
//   <OutputSelector>ItemArray.Item.PrimaryCategory.CategoryID</OutputSelector>
//   <OutputSelector>ItemArray.Item.PrimaryCategory.CategoryName</OutputSelector>
// </GetSellerListRequest>';
// var xmlData = jQuery.parseXML(requestString);

$().ready(function () {
	$.ajax({url: url, data: requestString, success: function (rootData) { 
		console.log(rootData);
		var items = rootData.findItemsByKeywordsResponse[0].searchResult[0].item || [];
		for (var i = 0; i < items.length; ++i) {
			var item     = items[i];
			var title    = item.title;
			var pic      = item.galleryURL;
			var viewitem = item.viewItemURL;
			if (title != null && viewitem != null) {
				console.log(pic);
				console.log(viewitem);
				console.log(title);
			}
		}
		console.log("done");
	}, dataType: 'xml'});
});