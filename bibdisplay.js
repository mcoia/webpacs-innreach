/* 
*  Rel 2007 "Skyline" Example Set
*  This File Last Changed: 02 September 2008 
*/

// Dean Edwards/Matthias Miller/John Resig

function init() {
    // quit if this function has already been called
    if (arguments.callee.done) return;

    // flag this function so we don't do the same thing twice
    arguments.callee.done = true;

    // kill the timer
    if (_timer) clearInterval(_timer);
    if (!document.getElementById) return false;
	stripeTables();
	highlightRows();
	stripeSubjectTables();
	stripeBrowseTables();
	
};

/* for Mozilla/Opera9 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, false);
}


/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            init(); // call the onload handler
        }
    }, 10);
}

/* for other browsers */
window.onload = init;


function addLoadEvent(func) {
var oldonload = window.onload;
 if (typeof window.onload != 'function') {
   window.onload = func;
  } else {
  window.onload = function() {
  oldonload();
     func();
      }
   }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}


function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var rows = getElemByClass(document , "td" , "briefCitRow" );
    var odd = false;
    for (var j=0; j<rows.length; j++) {
      if (odd == true) {
        addClass(rows[j],"odd");
        odd = false;
      } else {
        odd = true;
      }
    }

}

function highlightRows() {
  if (!document.getElementsByTagName) return false;
  var rows = getElemByClass(document , "td" , "briefCitRow" );
  for (var i=0; i<rows.length; i++) {
    rows[i].oldClassName = rows[i].className
    rows[i].onmouseover = function() {
      addClass(this,"highlight");
    }
    rows[i].onmouseout = function() {
      this.className = this.oldClassName
    }
  }
}

function stripeSubjectTables() {
    if (!document.getElementsByTagName) return false;
    var rows = getElemByClass(document , "tr" , "briefCitRow" );
    if(!rows[0]) return false;
    var odd = false;
    for (var j=0; j<rows.length; j++) {
      if (odd == true) {
         addClass(rows[j],"odd");
         odd = false;
      } else {
         odd = true;
      }
 }
}

function stripeBrowseTables(){
	var yours = getElemByClass(document, "tr" , "yourEntryWouldBeHere");
	var myTR = document.getElementsByTagName('tr');
    if (!yours[0]){ 
		stripeBrowse();       
       	for (var i=0;i<myTR.length;i++) {
			if(myTR[i].className =="browseEntry odd" || myTR[i].className=="browseEntry marked odd"){
				var spaner = myTR[i].getElementsByTagName("TD");
				var num = spaner[0].getAttribute("ROWSPAN");
				for(j=1;j<num;j++){
					addClass(myTR[i+j],"odd");
				}
			}
		}
	}else{
    	var tds = yours[0].getElementsByTagName("TD");
    	if(document.attachEvent){
        	if(yours[0].nextSibling.className == "browseEntry" || yours[0].nextSibling.className=="browseEntry marked"){
           		stripeBrowse();
           		for(i=0;i<tds.length;i++){
               		addClass(tds[i],"outline");
               			if(i==0){addClass(tds[i],"leftCap");}
               			if(i == (tds.length - 1 )){addClass(tds[i],"rightCap");}
               	}
        }else{
        	stripeBrowse();
       		for (var i=0;i<myTR.length;i++) {
				if(myTR[i].className =="browseEntry odd" || myTR[i].className=="browseEntry marked odd"){
					var spaner = myTR[i].getElementsByTagName("TD");
					if(spaner[0]){
						if(spaner[0].getAttribute("ROWSPAN")){
							var num = spaner[0].getAttribute("ROWSPAN");
							for(j=1;j<num;j++){
								addClass(myTR[i+j],"odd");
							}
						}
					}
				}
				else if(myTR[i].className =="yourEntryWouldBeHere"){
					var spaner = myTR[i].getElementsByTagName("TD");
					if(spaner[0]){
						if(spaner[0].getAttribute("ROWSPAN")){
							var num = spaner[0].getAttribute("ROWSPAN");
							for(j=0;j<spaner.length;j++){
         						addClass(spaner[j],"topLine");
         						if(j==0){addClass(spaner[j],"leftCap");}
         						if(j == (spaner.length - 1 )){addClass(spaner[j],"rightTopCap");}		
							}
							for(k=1;k<num;k++){
								var subs = myTR[i+k].getElementsByTagName("TD");
								if(k==(num-1)){
									for(l=0;l<subs.length;l++){
										addClass(subs[l],"botLine");
										if(l == (subs.length - 1 )){addClass(subs[l],"rightBotCap");}
									}
								}else{
									for(l=0;l<subs.length;l++){
										if(l == (subs.length - 1 )){addClass(subs[l],"rightSide");}
									}
								}
							}
						}
					}
				}
			}
		}

    	}else{
        	if(yours[0].nextSibling.nextSibling.className == "browseEntry" || yours[0].nextSibling.nextSibling.className=="browseEntry marked"){
        		stripeBrowse();
        		for(i=0;i<tds.length;i++){
            		addClass(tds[i],"outline");
            		if(i==0){addClass(tds[i],"leftCap");}
            		if(i == (tds.length - 1 )){addClass(tds[i],"rightCap");}
        		}
       		}else{
				stripeBrowse();
       			for (var i=0;i<myTR.length;i++) {
					if(myTR[i].className =="browseEntry odd" || myTR[i].className=="browseEntry marked odd"){
						var spaner = myTR[i].getElementsByTagName("TD");
						if(spaner[0]){
							if(spaner[0].getAttribute("ROWSPAN")){
								var num = spaner[0].getAttribute("ROWSPAN");
								for(j=1;j<num;j++){
									addClass(myTR[i+j],"odd");
								}
							}
						}
					}
					else if(myTR[i].className =="yourEntryWouldBeHere"){
						var spaner = myTR[i].getElementsByTagName("TD");
						if(spaner[0]){
							if(spaner[0].getAttribute("ROWSPAN")){
								var num = spaner[0].getAttribute("ROWSPAN");
									for(j=0;j<spaner.length;j++){
         								addClass(spaner[j],"topLine");
         								if(j==0){addClass(spaner[j],"leftCap");}
         								if(j == (spaner.length - 1 )){addClass(spaner[j],"rightTopCap");}		
									}
									for(k=1;k<num;k++){
										var subs = myTR[i+k].getElementsByTagName("TD");
										if(k==(num-1)){
											for(l=0;l<subs.length;l++){
												addClass(subs[l],"botLine");
												if(l == (subs.length - 1 )){addClass(subs[l],"rightBotCap");}
											}
										}else{
											for(l=0;l<subs.length;l++){
												if(l == (subs.length - 1 )){addClass(subs[l],"rightSide");}
											}
										}
									}
								}
							}
						}
					}

        	}
    	}
  	}
}

function stripeBrowse() {
    if (!document.getElementsByTagName) return false;
    var rows = getElemByClass(document , "tr" , "browseEntry" );
    if(!rows[0])return false;
    var odd = false;
    for (var j=0; j<rows.length; j++) {
      if (odd == true) {
        addClass(rows[j],"odd");
        odd = false;
      } else {
        odd = true;
      }
    }

}

// Robert Nyman

function getElemByClass(oElm, strTagName, strClassName){
    var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
        oElement = arrElements[i];
        if(oRegExp.test(oElement.className)){
            arrReturnElements.push(oElement);
        }
    }
    return (arrReturnElements)
}


/*2006 WebPAC Pro Version, set from 21 November, 2006*/

function contentDisplay(id) {

	document.getElementById("copySection").style.display = 'none';
	document.getElementById("moreSection").style.display = 'none';
	document.getElementById("similarSection").style.display = 'none';
	document.getElementById("fullSection").style.display = 'none';
	
	document.getElementById(id).style.display = 'block';

}

function bibTabChange(one,two,three,four,five,six) {
	identity=document.getElementById(one);
	identity.className='selected1';
	identity2=document.getElementById(two);
	identity2.className='selected2';
	identity3=document.getElementById(three);
	identity3.className='selected3';
	identity4=document.getElementById(four);
	identity4.className='selected4';
	identity5=document.getElementById(five);
	identity5.className='bibTabOn';
	identity6=document.getElementById(six);
	identity6.className='bibTabSelected';
}

function bibSimTabChange(one,two,three,four,five,six) {
	identity=document.getElementById(one);
	identity.className='selected1';
	identity2=document.getElementById(two);
	identity2.className='selected2';
	identity3=document.getElementById(three);
	identity3.className='selected3';
	identity4=document.getElementById(four);
	identity4.className='selected4';
	identity5=document.getElementById(five);
	identity5.className='bibSimTabOn';
	identity6=document.getElementById(six);
	identity6.className='bibSimTabSelected';
}

function bibTabswitcher() {
	document.getElementById("copyB1").className = 'option1';
	document.getElementById("copyB2").className = 'option2';
	document.getElementById("copyB3").className = 'option3';
	document.getElementById("copyB4").className = 'option4';
	document.getElementById("moreB1").className = 'option1';
	document.getElementById("moreB2").className = 'option2';
	document.getElementById("moreB3").className = 'option3';
	document.getElementById("moreB4").className = 'option4';
	document.getElementById("simItB1").className = 'option1';
	document.getElementById("simItB2").className = 'option2';
	document.getElementById("simItB3").className = 'option3';
	document.getElementById("simItB4").className = 'option4';
	document.getElementById("fullB1").className = 'option1';
	document.getElementById("fullB2").className = 'option2';
	document.getElementById("fullB3").className = 'option3';
	document.getElementById("fullB4").className = 'option4';


	document.getElementById("bibCopyStatus").className = 'bibTabOff';
	document.getElementById("bibMoreDetails").className = 'bibTabOff';
	document.getElementById("bibSimilarItems").className = 'bibSimTabOff';
	document.getElementById("bibFullRecord").className = 'bibTabOff';

	document.getElementById("copyContent").className = 'bibTabContent';
	document.getElementById("moreContent").className = 'bibTabContent';
	document.getElementById("simContent").className = 'bibSimTabContent';
	document.getElementById("fullContent").className = 'bibTabContent';
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function addPrintStyles(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("printcss")) return false;
	var oldStyles = document.getElementsByTagName("link")[1];
	oldStyles.setAttribute("title", "web");
	var linkElem = document.createElement("link");
	linkElem.setAttribute("type", "text/css" );
	linkElem.setAttribute("rel", "alternate stylesheet");
	linkElem.setAttribute("title", "printVer");
	linkElem.setAttribute("href", "/screens/printVer.css");
	linkElem = document.getElementsByTagName("head")[0].appendChild(linkElem);
}

function printVersionSelect(){
	if (!document.getElementById("printcss")) return false;
	var printSwitch = document.getElementById("printcss");
	printSwitch.onclick = function() {
 	  contentDisplay("fullSection");
      setActiveStyleSheet("printVer");
    }
}

function webReturn(){
	if (!document.getElementById("webcss")) return false;
	var webSwitch = document.getElementById("webcss");
	webSwitch.onclick = function() {
	  setActiveStyleSheet("web");
 	  contentDisplay("copySection");
	  bibTabswitcher();
	  bibTabChange('copyB1','copyB2','copyB3','copyB4','bibCopyStatus','copyContent');
    }
}

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function initTabs(){
	if (!document.getElementById("printcss")) return false;
	fullSelect();
	simSelect();
	moreSelect();
	copySelect();
/*for IE caching problem */
	setActiveStyleSheet("web");
}

function fullSelect(){
	var tab = document.getElementById("fullSelect");
	tab.onclick = function() {
	  contentDisplay("fullSection");
	  bibTabswitcher();
	  bibTabChange('fullB1','fullB2','fullB3','fullB4','bibFullRecord','fullContent');
	}
}

function simSelect(){
	var tab = document.getElementById("simSelect");
	tab.onclick = function() {
	  contentDisplay("similarSection");
	  bibTabswitcher();
	  bibSimTabChange('simItB1','simItB2','simItB3','simItB4','bibSimilarItems','simContent');
	}
}
function moreSelect(){
	var tab = document.getElementById("moreSelect");
	tab.onclick = function() {
	  contentDisplay("moreSection");
	  bibTabswitcher();
	  bibTabChange('moreB1','moreB2','moreB3','moreB4','bibMoreDetails','moreContent');;
	}
}

function copySelect(){
	var tab = document.getElementById("copySelect");
	tab.onclick = function() {
	  contentDisplay("copySection");
	  bibTabswitcher();
	  bibTabChange('copyB1','copyB2','copyB3','copyB4','bibCopyStatus','copyContent');
	}
}

addLoadEvent(addPrintStyles);
addLoadEvent(printVersionSelect);
addLoadEvent(webReturn);
addLoadEvent(initTabs);

