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
	var tracker = document.getElementById("tracker");
	tracker.innerHTML = e.screenX + "," + e.screenY;
}

function onloadHandler() {
	document.getElementById("div1").addEventListener('click', yesWrapper, false);
	document.getElementById("div2").addEventListener('click', noWrapper, false);
	document.addEventListener('mousemove', moveWrapper, false);
}