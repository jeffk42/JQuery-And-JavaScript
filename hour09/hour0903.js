function onloadHandler() {
	var employee = document.getElementById("Employee");
	employee.addEventListener('click', simpleClick, false);
	var registered = document.getElementById("Registered");
	registered.addEventListener('click', eventClick, false);
}

function simpleClick(e) {
	var cb = document.getElementById("check"+e.target.id);
	cb.click();
}

function eventClick(e) {
	var event = document.createEvent("MouseEvents");
	event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	var cb = document.getElementById("check"+e.target.id);
	cb.dispatchEvent(event);
}