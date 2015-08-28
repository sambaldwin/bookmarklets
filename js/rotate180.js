var bodyElement = document.body;
var htmlElement = document.getElementsByTagName( "html" )[ 0 ];

bodyElement.style.webkitTransform = "rotate(180deg)";
bodyElement.style.msTransform = "rotate(180deg)";
bodyElement.style.transform = "rotate(180deg)";
bodyElement.style.minHeight = "100vh";

htmlElement.style.minHeight = "100vh";
