$(document).ready(function () {
	$("#docMenu").hide();
	$("#hours").click(setHourNav);
	$("#docs").click(setDocNav);
	$("#fade").click(fade);
});

function setHour(e) {
	var hour = $("#hourSelect").val();
	$("#content p").html("Hour "+hour);
}

function setHourNav() {
	$("#docMenu").hide();
	$("span").removeClass("active");
	$("#hours").addClass("active");
	var select = $('<select id="hourSelect"></select>');
	select.change(setHour);
	
	for (var x = 1; x < 25; x++) {
		var option = $("<option></option");
		option.val(x);
		option.html("Hour "+x);
		select.append(option);
	}
	
	$("#content").html("");
	$("#content").append(select).append("<br /><p></p>");
	setHour();
}

function setDocNav() {
	$("#docMenu").show();
	$("span").removeClass("active");
	$("#docs").addClass("active");
}

function setDoc(doc) {
	var frame = $("<iframe></iframe>");
	frame.attr("src", doc);
	$("#content").html(frame);
}

function fade() {
	var opacity = $("#content").css("opacity");
	if (opacity < 1) {
		$("#content").css("opacity", 1);
	}
	else {
		$("#content").css("opacity", 0.5);
	}
}