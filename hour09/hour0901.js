function clickHandler(e, objId, num, msg) {
	var obj = document.getElementById(objId);
	obj.innerHTML = "DIV " + num + " says " + msg + " at X position: " + e.screenX;
}

function yesWrapper(e) {
	clickHandler(e, "heading", 1, "yes");
//	e.target.removeEventListener('click', yesWrapper);
}

function noWrapper(e) {
	clickHandler(e, "heading", 2, "no");
//	e.target.removeEventListener('click', noWrapper);
}

function moveWrapper(e) {
	var tracker = document.getElementById("trackercoords");
	tracker.innerHTML = e.screenX + "," + e.screenY;
}

function moveInButton(e) {
	var msg = "";
	if (e.currentTarget.id == "div1")
		msg = "yes";
	else
		msg = "no";
	var trackerloc = document.getElementById("trackerloc");
	trackerloc.innerHTML = " (" + msg + " button)";
}

function moveOutButton(e) {
	var trackerloc = document.getElementById("trackerloc");
	trackerloc.innerHTML = "";
}

function onloadHandler() {
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	div1.addEventListener('click', yesWrapper, false);
	div1.addEventListener('mouseenter', moveInButton, false);
	div1.addEventListener('mouseleave', moveOutButton, false);
	div2.addEventListener('click', noWrapper, false);
	div2.addEventListener('mouseenter', moveInButton, false);
	div2.addEventListener('mouseleave', moveOutButton, false);
	document.addEventListener('mousemove', moveWrapper, false);
}