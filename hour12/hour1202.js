$(document).ready(function () {
	$("img").mouseover(
			function () {
				$(this).fadeTo(300, 1);
				});
	$("img").mouseout(
			function () {
				$(this).fadeTo(300, 0.3);
				});
});
	