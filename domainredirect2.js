var href = window.location.href
var edu = ".edu"
var domainLength = href.indexOf(edu) + edu.length
var notDomain = href.substring(domainLength)
var searchmobius = 'http://searchmobius.org'

if (notDomain == "/") {
  var redirectUrl = searchmobius + "/search~S0&redirected"
}else {
  var r = /\W$/
  if (r.test(notDomain) == true){
    notDomain = notDomain.slice(0,-1);
  }
  redirectUrl = searchmobius + notDomain + "&redirected"
}

if(href.indexOf("laurel.lso.missouri.edu") != -1 ){
}else if(href.indexOf("missouri.edu") != -1 ){
    var oldDomain = "mobius.missouri.edu"
    window.location = redirectUrl;
}else if(href.indexOf("umsystem.edu") != -1 ){
    var oldDomain = "mobius.umsystem.edu"
    window.location = redirectUrl;
}else{}

if (href.indexOf("&redirected") != -1 ) {
    var redirectMessage = "<p>You've been redirected from mobius.umsystem.edu or mobius.missouri.edu. Starting July 1, 2012, those addresses will no longer work.</p><p>Please update your bookmarks to <a href='http://searchmobius.org'>http://searchmobius.org</a>.</p>"

    $(document).ready(function () {
        $('#alertMessage').html(redirectMessage);
    });
}

