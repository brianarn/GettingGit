// main.js
//
// Last modified: 2011-04-04 21:03:59
//
// Stuff we need for each page, I suppose

if (document.addEventListener) {
	document.addEventListener('DOMContentLoaded', function(){
		alert('The DOM is ready!');
	}, false);
} else {
	alert('This browser must suck');
}
