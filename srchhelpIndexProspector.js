$(document).ready(function () {
	$(window).load(function() {

//adds prospector button to scrhelp index pages
		function updateProspectorButtonIndex() {
			var indexChar = searchhelpIndex.slice(-1);	//gets index from variable on searchhelp_ pages
			searchIndexVal = $("#SEARCH").val(); //gets search text

				if(indexChar.match(/t|a|d/)) {
					prospectorArgIndex = indexChar + ":(" + searchIndexVal + ")"; //creates url for t/a/d indexes
				}
				else {
					prospectorArgIndex = searchIndexVal; //creates url for keyword and other indexes
				}

			$("#prospectorLink").attr("href", prospectorUrl + prospectorArgIndex)
		}

prospectorUrl = "http://encore.coalliance.org/iii/encore/search/C__S";

prospectorButton = "<div id='prospectorWrapAdv'><a id='prospectorLink' href=''><img alt='search in prospector' src='/screens/ProspectorButton4MOBIUS_new.png' class='prospectorButton'></a><a href='http://searchmobius.org/help#prospectortips'><span class='button prospectorButtonText'>Learn More</span></a></div>";

		if ($("#SEARCH").val() > ""){ //for individual search index pages
			$(".pageHeader").after(prospectorButton); // drop a button that doesn't go anywhere

			updateProspectorButtonIndex(); // Just set the href initially
		}

	})
});