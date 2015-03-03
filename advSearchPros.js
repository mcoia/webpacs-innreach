
//adds prospector button to scrhelp index pages


function advSearchProspectorButton() {
advsearchURL = window.location.href.split(/[/\s?]+/); //gets url index
advSearchIndexType = advsearchURL[3]; //isolates index value based on url
advSearchType = $("[name*='fieldLimit'] option:selected").val();
searchAdvInput = $("input[name*='searchText']").val(); //gets search text for advanced search page


//adv search page
if((advSearchIndexType.match(/X/) || searchAdvInput.length > 0)) {
prospectorArgIndex = advSearchType + searchAdvInput;
}
else {
prospectorArgIndex = searchAdvInput; //creates url for keyword and other indexes
}

$("#prospectorLink").attr("href", prospectorUrl + prospectorArgIndex)
}

prospectorUrl = "http://encore.coalliance.org/iii/encore/search/C__S";

prospectorButton = "<div id='prospectorWrap'><a id='prospectorLink' href=''><img alt='search in prospector' src='/screens/ProspectorButton4MOBIUS_new.png' class='prospectorButton'></a><a href='http://searchmobius.org/help#prospectortips'><span class='button prospectorButtonText'>Learn More</span></a></div>";

function init(){
if ($('h2:contains("NO ENTRIES FOUND")').length){ //for individual search index pages
//$('h2:contains("NO ENTRIES FOUND")').addClass('noEntry');
$("#accessibleForm").before(prospectorButton); // drop a button that doesn't go anywhere

advSearchProspectorButton(); // Just set the href initially
}
}
window.onload = init;
