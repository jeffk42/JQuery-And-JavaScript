$(document).ready(function () {
	setTimeout(continueNotify, 5000);
	setInterval(displayTime, 1000);
	$("#platform").html(window.navigator.platform);
});

function continueNotify() {
	var result = confirm("Do you wish to continue\nto receive notifications?");
	
	if (result) {
		setTimeout(continueNotify, 5000);
	}
}

function padNumber(num) {
	if (num < 10) {
		return "0" + num;
	}
	return num;
}

function displayTime() {
	var date = new Date();
	$("#clock").html(padNumber(date.getHours()) + ":" +
			padNumber(date.getMinutes()) + ":" + 
			padNumber(date.getSeconds()));
}