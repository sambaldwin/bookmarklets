script = document.createElement( "script" );
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
document.body.appendChild( script );
UIscript = document.createElement( "script" );
UIscript.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js";
UIscript.onload = runBookmarklet;
document.body.appendChild( UIscript );

function runBookmarklet() {
	$( "*" ).draggable();
}
